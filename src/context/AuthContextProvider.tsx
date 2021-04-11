import { useState } from "react";
import apolloClient from "../apollo/apollo-config";

import AuthContext, { AuthContextModel } from "./auth-context";
import { IUser } from "../models/user.model";

const AuthContextProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null);

    const login = (user: IUser): void => {
        setUser(user);
    };

    const logout = (): void => {
        setUser(null);
        apolloClient.resetStore();
    };

    const authContext: AuthContextModel = {
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;