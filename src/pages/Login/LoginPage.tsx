import { IonPage, useIonToast } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";
import { ApolloError, useMutation } from "@apollo/client";

import "./LoginPage.scss";
import { ILoginResponse, LOGIN } from "./LoginPage.constants";
import { ILoginPayload } from "../../models/queries-mutations-input.model";
import AppConfig from "../../app-constants";
import AuthBoxComponent from "./AuthBoxComponent/AuthBoxComponent";
import { ILoginForm } from "../../models/forms/login-form.model";
import { useLogger } from "../../hooks/logger";
import { useAuth } from "../../hooks/authentication";

const LoginPage: React.FC = () => {

    const { t } = useTranslation();
    const logger = useLogger("LoginPage");

    const [presentToast] = useIonToast();
    const { doLocalLogin } = useAuth();
    const [login, { loading }] = useMutation<ILoginResponse, ILoginPayload>(LOGIN, {
        onError: (err) => handleError(err)
    });

    const doLogin = async (values: ILoginForm, helpers: FormikHelpers<ILoginForm>): Promise<void> => {
        const authUser = (await login({ variables: { email: values.email, password: values.password } }))?.data?.login;
        if (authUser) {
            helpers.resetForm();
            doLocalLogin({...authUser});
        }
    };

    const handleError = (err: ApolloError): void => {
        if (Object.values(AppConfig.ERROR_CODES.INFO).includes(err.message)) {
            presentToast({
                position: "top",
                message: t(`errors.${err.message}`),
                color: "secondary",
                duration: AppConfig.TOAST_INFO_DURATION_MS
            });
        } else {
            logger.w("There was a login error", err.message);
        }
    };

    return (
        <IonPage>
            <div className="login-page" style={{ backgroundImage: `url(${AppConfig.LOGIN_BG_IMAGE_URL})` }}>
                <img className="conectima-logo" src="/assets/images/conectima-logo.png" alt="Conectima logo" />
                <h1 className="app-name">{t("general.appName")}</h1>
                <AuthBoxComponent doLogin={doLogin} isLoading={loading}/>
            </div>
        </IonPage>
    );
};

export default LoginPage;