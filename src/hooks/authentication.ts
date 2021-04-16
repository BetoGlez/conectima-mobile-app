import { useContext } from "react";
import { useHistory } from "react-router";
import { Storage } from "@capacitor/storage";
import { ApolloCache, ApolloError, FetchResult, useMutation } from "@apollo/client";
import jwtDecode, { JwtPayload } from "jwt-decode";

import AppConfig from "../app-constants";
import apolloClient from "../graphql/apollo-config";
import AuthContext from "../context/auth-context";
import { useLogger } from "./logger";
import { useToast } from "./popups";
import { LOGIN } from "../graphql/mutations";
import { ILoginResponse } from "../graphql/mutations-response.model";
import { ILoginPayload } from "../graphql/inputs-payload.model";
import { IUser, RoleName } from "../models/user.model";

export const useAuth = () => {
    const logger = useLogger("useAuth");
    const authContext = useContext(AuthContext);
    const history = useHistory();

    const checkAuthUser = async () => {
        const authToken = (await Storage.get({ key: AppConfig.TOKEN_STORAGE_KEY })).value;
        if (authToken) {
            logger.d("Token found in local storage");
            const decodedToken = jwtDecode<JwtPayload>(authToken);
            if (decodedToken.exp && (decodedToken.exp * AppConfig.ONE_SECOND_IN_MS < Date.now())) {
                logger.w("Token expired");
                await Storage.remove({ key: AppConfig.TOKEN_STORAGE_KEY });
            } else {
                const localStorageUser = decodedToken as IUser;
                const composedUser: IUser = {
                    id: localStorageUser.id,
                    email: localStorageUser.email,
                    username: localStorageUser.username,
                    token: authToken
                };
                logger.d("Setting current user to: ", composedUser);
                authContext.login(composedUser);
                history.push(AppConfig.APP_ROUTES.PROFILE_SELECTOR);
            }
        } else {
            logger.d("No token found in local storage");
        }
    };

    const setLocalUserRole = (roleName: RoleName): void => {
        authContext.setUserRole(roleName);
        logger.d("Selected role: ", roleName);
    };

    return { setLocalUserRole, checkAuthUser, activeUser: authContext.user };
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

    const handleLogin = async (_: ApolloCache<ILoginResponse>, result: FetchResult<ILoginResponse>) => {
        const authUser = result.data?.login;
        if (authUser) {
            authContext.login({...authUser});
            await Storage.set({ key: AppConfig.TOKEN_STORAGE_KEY, value: authUser.token });
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

    const logout = async (): Promise<void> => {
        history.replace(AppConfig.APP_ROUTES.LOGIN);
        authContext.logout();
        await Storage.remove({ key: AppConfig.TOKEN_STORAGE_KEY});
        apolloClient.clearStore();
        logger.d("User logged out");
    };

    return { logout };
};