import { IUserRole } from "../../models/user.model";

export const ROLE_OPTIONS: Array<IUserRole> = [
    {
        roleName: "manager",
        imageSrc: "/assets/images/manager-role.svg"
    },
    {
        roleName: "developer",
        imageSrc: "/assets/images/developer-role.svg"
    }
];