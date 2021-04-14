import AppConfig from "../../app-constants";
import { IUserRole } from "../../models/user.model";

export const ROLE_OPTIONS: Array<IUserRole> = [
    {
        roleName: "manager",
        imageSrc: AppConfig.MANAGER_ROLE_IMAGE_URL
    },
    {
        roleName: "developer",
        imageSrc: AppConfig.DEVELOPER_ROLE_IMAGE_URL
    }
];