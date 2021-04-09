import { IonPage } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";
import { useHistory } from "react-router";

import "./LoginPage.scss";
import AppConfig from "../../app-constants";
import AuthBoxComponent from "./AuthBoxComponent/AuthBoxComponent";
import { ILoginForm } from "../../models/forms/login-form.model";
import { useLogger } from "../../hooks/logger";

const LoginPage: React.FC = () => {

    const { t } = useTranslation();
    const logger = useLogger("LoginPage");
    const history = useHistory();

    const doLogin = (values: ILoginForm, helpers: FormikHelpers<ILoginForm>): void | Promise<any> => {
        logger.d("Login with credentials: ", values);
        // TODO: Implement login mutation and state handle here
        helpers.resetForm();
        history.push(AppConfig.APP_ROUTES.PROFILE_SELECTOR);
    };

    return (
        <IonPage>
            <div className="login-page" style={{ backgroundImage: `url(${AppConfig.LOGIN_BG_IMAGE_URL})` }}>
                <img className="conectima-logo" src="/assets/images/conectima-logo.png" alt="Conectima logo" />
                <h1 className="app-name">{t("general.appName")}</h1>
                <AuthBoxComponent doLogin={doLogin}/>
            </div>
        </IonPage>
    );
};

export default LoginPage;