import { version } from "../package.json";

export default class AppConfig {

    public static readonly APP_VERSION = version;
    public static readonly APOLLOR_SERVER_URL = process.env.REACT_APP_APOLLOR_SERVER_URL || "http://localhost:5000";
    public static readonly TOKEN_STORAGE_KEY = process.env.REACT_APP_TOKEN_STORAGE_KEY || "token_storage";
    public static readonly DEV_COST_STORAGE_KEY = process.env.REACT_APP_DEV_COST_STORAGE_KEY || "dev_cost_storage";

    public static readonly ABOUT_INFO_URL = "https://github.com/BetoGlez/conectima-mobile-app";
    public static readonly SHEET_CONNECT_INSTRUCTIONS_VIDEO = "https://youtu.be/nhh9Lw4-6ho";
    public static readonly SHEET_PROJECT_SHARE_MAIL = process.env.REACT_APP_SHEET_PROJECT_SHARE_MAIL || "Introduce your configured mail :)";

    public static readonly DATE_FORMAT = "DD/MM/YYYY";
    public static readonly MIN_PASSWORD_LENGTH = 8;
    public static readonly TOAST_INFO_DURATION_MS = 3000;

    public static readonly ONE_SECOND_IN_MS = 1000;

    public static readonly LOGIN_BG_IMAGE_URL = "/assets/images/login-bg.jpg";
    public static readonly MANAGER_ROLE_IMAGE_URL = "/assets/images/manager-role.svg";
    public static readonly DEVELOPER_ROLE_IMAGE_URL = "/assets/images/developer-role.svg";
    public static readonly NO_DATA_IMAGE_URL = "/assets/images/no-data.svg";
    public static readonly PROJECT_SPRINT_IMAGE_URL = "/assets/images/project_team.svg";
    public static readonly ANALYTICS_SPRINT_IMAGE_URL = "/assets/images/sprint-analytics.svg";

    public static readonly APP_ROUTES = {
        EMPTY: "/",
        LOGIN: "/login",
        HOME: "/home",
        PROJECTS: "/home/projects",
        COMPARE: "/home/compare",
        ANALYTICS: "/home/analytics",
        CONFIGURE: "/home/configure",
        PROFILE_SELECTOR: "/profile-selector",
        NEW_PROJECT: "/new-project",
        CHARTS: "/charts",
        COMPARE_DETAILS: "/compare-detail"
    };

    public static readonly ERROR_CODES = {
        INFO: {
            USER_NOT_FOUND: "userNotFound",
            INVALID_CREDENTIALS: "invalidCredentials"
        },
        CREATE_PROJECT: {
            DUPLICATED_NAME: "duplicatedProjectName",
            ERROR_CONNECTING_SHEET: "errorConnectingSheet"
        }
    };

    public static readonly PRIMARY_HEX_COLOR = "#f26f6b";
    public static readonly SECONDARY_HEX_COLOR = "#273342";
}