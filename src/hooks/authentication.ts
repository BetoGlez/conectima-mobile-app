import { useContext } from "react";
import { useHistory } from "react-router";

import { useLogger } from "./logger";
import AppConfig from "../app-constants";
import AuthContext from "../context/auth-context";
import { IUser, RoleName } from "../models/user.model";

export const useAuth = () => {

    const logger = useLogger("useAuth");
    const history = useHistory();
    const authContext = useContext(AuthContext);

    const doLocalLogin = (userData: IUser): void => {
        authContext.login(userData);
        logger.d("User logged in: ", userData.username);
        history.push(AppConfig.APP_ROUTES.PROFILE_SELECTOR);
    };

    const doLocalLogout = (): void => {
        history.replace(AppConfig.APP_ROUTES.LOGIN);
        authContext.logout();
        logger.d("User logged out");
    };

    const setLocalUserRole = (roleName: RoleName): void => {
        authContext.setUserRole(roleName);
        logger.d("Selected role: ", roleName);
    };

    const activeUser = authContext.user;

    return {doLocalLogin, doLocalLogout, setLocalUserRole, activeUser};
};