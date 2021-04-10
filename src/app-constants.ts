import { version } from "../package.json";

export default class AppConfig {

    public static readonly APP_VERSION = version;
    public static readonly APOLLOR_SERVER_URL = process.env.APOLLOR_SERVER_URL || "http://localhost:5000";

    public static readonly ABOUT_INFO_URL = "https://github.com/BetoGlez/conectima-mobile-app";
    public static readonly LOGIN_BG_IMAGE_URL = "/assets/images/login-bg.jpg";
    public static readonly MIN_PASSWORD_LENGTH = 8;

    public static readonly APP_ROUTES = {
        LOGIN: "/login",
        PROFILE_SELECTOR: "/profile-selector",
        HOME: "/home",
        PROJECTS: "/home/projects",
        COMPARE: "/home/compare",
        ANALYTICS: "/home/analytics",
        CONFIGURE: "/home/configure"
    };

}