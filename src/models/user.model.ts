export type RoleName = "manager" | "developer";

export interface IUserRole {
    roleName: RoleName;
    imageSrc: string;
}

export interface IUser {
    id: string;
    email: string;
    username: string;
    role?: IUserRole;
    token?: string;
}