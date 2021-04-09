export default class AppConfig {

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

    public static readonly LOGIN_BG_IMAGE_URL = "/assets/images/login-bg.jpg";
}