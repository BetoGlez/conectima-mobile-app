import { IonPage } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";

import "./LoginPage.scss";
import AppConfig from "../../app-constants";
import AuthBoxComponent from "./AuthBoxComponent/AuthBoxComponent";
import { ILoginForm } from "../../models/forms/login-form.model";
import { useLogin } from "../../hooks/authentication";

const LoginPage: React.FC = () => {

    const { t } = useTranslation();

    const { login, isLoading } = useLogin();

    const doLogin = async (values: ILoginForm, helpers: FormikHelpers<ILoginForm>): Promise<void> => {
        const authUser = (await login({ variables: { email: values.email, password: values.password } }))?.data?.login;
        if (authUser) {
            helpers.resetForm();
        }
    };

    return (
        <IonPage>
            <div className="login-page" style={{ backgroundImage: `url(${AppConfig.LOGIN_BG_IMAGE_URL})` }}>
                <img className="conectima-logo" src="/assets/images/conectima-logo.png" alt="Conectima logo" />
                <h1 className="app-name">{t("general.appName")}</h1>
                <AuthBoxComponent doLogin={doLogin} isLoading={isLoading}/>
            </div>
        </IonPage>
    );
};

export default LoginPage;