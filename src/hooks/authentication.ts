import { useContext } from "react";
import { useHistory } from "react-router";
import { ApolloCache, ApolloError, FetchResult, useMutation } from "@apollo/client";

import AppConfig from "../app-constants";
import apolloClient from "../graphql/apollo-config";
import AuthContext from "../context/auth-context";
import { useLogger } from "./logger";
import { useToast } from "./popups";
import { LOGIN } from "../graphql/mutations";
import { ILoginResponse } from "../graphql/mutations-response.model";
import { ILoginPayload } from "../graphql/inputs-payload.model";
import { RoleName } from "../models/user.model";

export const useAuth = () => {
    const logger = useLogger("useAuth");
    const authContext = useContext(AuthContext);

    const setLocalUserRole = (roleName: RoleName): void => {
        authContext.setUserRole(roleName);
        logger.d("Selected role: ", roleName);
    };

    return { setLocalUserRole, activeUser: authContext.user };
};

export const useLogin = () => {
    const logger = useLogger("useLogin");
    const history = useHistory();

    const { presentInfoToast } = useToast();
    const authContext = useContext(AuthContext);
    const [login, { loading, data, error }] = useMutation<ILoginResponse, ILoginPayload>(LOGIN, {
        update: (cache, res) => handleLogin(cache, res),
        onError: (err) => handleError(err)
    });

    const handleLogin = (_: ApolloCache<ILoginResponse>, result: FetchResult<ILoginResponse>) => {
        const authUser = result.data?.login;
        if (authUser) {
            authContext.login({...authUser});
            logger.d("User logged in: ", authUser.username);
            history.push(AppConfig.APP_ROUTES.PROFILE_SELECTOR);
        }
    };

    const handleError = (err: ApolloError): void => {
        if (Object.values(AppConfig.ERROR_CODES.INFO).includes(err.message)) {
            presentInfoToast(`errors.${err.message}`);
        } else {
            logger.w("There was a login error", err.message);
        }
    };

    return {login, isLoading: loading, data, error };
};

export const useLogout = () => {
    const logger = useLogger("useLogout");
    const history = useHistory();

    const authContext = useContext(AuthContext);

    const logout = (): void => {
        history.replace(AppConfig.APP_ROUTES.LOGIN);
        authContext.logout();
        apolloClient.clearStore();
        logger.d("User logged out");
    };

    return { logout };
};