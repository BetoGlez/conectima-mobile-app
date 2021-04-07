import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";

import "./LoginPage.scss"
import AppConfig from "../../app-constants";
import AuthBoxComponent from "./AuthBoxComponent/AuthBoxComponent";
import LoggerContext from "../../utils/logger/logger-context";
import { ILoginForm } from "../../models/forms/login-form.model";

const LoginPage: React.FC = () => {

    const { t } = useTranslation();
    const logger = useContext(LoggerContext);

    const doLogin = (values: ILoginForm, helpers: FormikHelpers<ILoginForm>): void | Promise<any> => {
        logger.d("Login with credentials: ", values);
        // TODO: Implement login mutation and state handle here
        helpers.resetForm();
    };

    return (
        <div className="login-page" style={{ backgroundImage: `url(${AppConfig.LOGIN_BG_IMAGE_URL})` }}>
            <img className="conectima-logo" src="/assets/images/conectima-logo.png" alt="Conectima logo" />
            <h1 className="app-name">{t("general.appName")}</h1>
            <AuthBoxComponent doLogin={doLogin}/>
        </div>
    );
};

export default LoginPage;