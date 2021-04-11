import { useState } from "react";
import apolloClient from "../apollo/apollo-config";

import AuthContext, { AuthContextModel } from "./auth-context";
import { IUser, RoleName } from "../models/user.model";
import AppConfig from "../app-constants";

const AuthContextProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null);

    const login = (user: IUser): void => {
        setUser(user);
    };

    const logout = (): void => {
        setUser(null);
        apolloClient.resetStore();
    };

    const setUserRole = (roleName: RoleName): void => {
        if (user) {
            const imageSrc = roleName === "manager" ? AppConfig.MANAGER_ROLE_IMAGE_URL : AppConfig.DEVELOPER_ROLE_IMAGE_URL;
            const updatedUser: IUser = {...user, role: {roleName, imageSrc}};
            setUser(updatedUser);
        }
    };

    const authContext: AuthContextModel = {
        user,
        login,
        logout,
        setUserRole
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;