
export interface IRoleOptionComponentProps {
    roleOption: IRoleOption;
}

export type UserRole = "manager" | "developer";

export interface IRoleOption {
    role: UserRole;
    imageSrc: string;
}