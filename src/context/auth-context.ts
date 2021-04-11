import React from "react";
import { IUser, RoleName } from "../models/user.model";

export interface AuthContextModel {
    user: IUser | null;
    login: (userData: IUser) => void;
    logout: () => void;
    setUserRole: (role: RoleName) => void;
}

const AuthContext = React.createContext<AuthContextModel>({
    user: null,
    login: () => {},
    logout: () => {},
    setUserRole: () => {}
});

export default AuthContext;