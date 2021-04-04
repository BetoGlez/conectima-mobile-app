import React from "react";
import { useTranslation } from "react-i18next";

import "./LoginPage.scss"
import AppConfig from "../../app-constants";
import AuthBoxComponent from "./AuthBoxComponent/AuthBoxComponent";

const LoginPage: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className="login-page" style={{ backgroundImage: `url(${AppConfig.LOGIN_BG_IMAGE_URL})` }}>
            <img className="conectima-logo" src="/assets/images/conectima-logo.png" alt="Conectima logo" />
            <h1 className="app-name">{t("general.appName")}</h1>
            <AuthBoxComponent />
        </div>
    );
};

export default LoginPage;