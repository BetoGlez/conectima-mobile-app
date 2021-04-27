import { useEffect, useRef } from "react";
import { IonPage } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";

import "./LoginPage.scss";
import AuthBoxComponent from "./AuthBoxComponent/AuthBoxComponent";
import AppConfig from "../../app-constants";
import { useLogger } from "../../hooks/logger";
import { ILoginForm } from "../../models/forms/login-form.model";
import { useLocalStorageAuth, useLogin } from "../../hooks/authentication";

const LoginPage: React.FC = () => {

    const logger = useLogger("LoginPage");
    const loggerRef = useRef(logger);
    const { t } = useTranslation();

    const { login, isLoading } = useLogin();
    const { checkAuthUser } = useLocalStorageAuth();
    const checkAuthUserRef = useRef(checkAuthUser);

    useEffect(() => {
        loggerRef.current.d("Checking for local storage user...");
        checkAuthUserRef.current();
    }, []);

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