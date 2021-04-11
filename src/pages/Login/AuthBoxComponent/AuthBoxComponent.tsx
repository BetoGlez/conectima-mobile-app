import { IonCard, IonCardHeader, IonCardContent, IonRow, IonCol, IonItem, IonInput, IonButton, IonSpinner } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";

import "./AuthBoxComponent.scss";
import { IAuthBoxComponentProps, INITIAL_LOGIN_FORM_VALUES, LOGIN_VALIDATION_SCHEMA } from "./AuthBoxComponent.constants";
import { ILoginForm } from "../../../models/forms/login-form.model";

const AuthBoxComponent: React.FC<IAuthBoxComponentProps> = ({isLoading, ...props}) => {

    const { t } = useTranslation();

    const loginForm = useFormik<ILoginForm>({
        initialValues: INITIAL_LOGIN_FORM_VALUES,
        onSubmit: (values, helpers) => props.doLogin(values, helpers),
        validationSchema: LOGIN_VALIDATION_SCHEMA
    });

    return (
        <IonCard className="auth-box">
            <IonCardHeader className="ion-text-center">
                <h2 className="auth-box-title">{t("auth.introduceCredentials")}</h2>
            </IonCardHeader>
            <IonCardContent>
                <form onSubmit={loginForm.handleSubmit}>
                    <IonRow>
                        <IonCol>
                            <IonItem className="conectima-input" lines="none">
                                <IonInput name="email" color="secondary" type="email" placeholder={t("auth.email")}
                                    value={loginForm.values.email} onIonChange={loginForm.handleChange}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-top">
                        <IonCol>
                            <IonItem className="conectima-input" lines="none">
                                <IonInput name="password" color="secondary" type="password" placeholder={t("auth.password")}
                                    value={loginForm.values.password} onIonChange={loginForm.handleChange}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-top">
                        <IonCol size="6" offset="3" className="ion-text-center">
                            { !isLoading ?
                                <IonButton expand="block" type="submit" disabled={!loginForm.isValid}>{t("auth.login")}</IonButton>
                                :
                                <IonSpinner color="primary" className="ion-margin-top"/>
                            }
                        </IonCol>
                    </IonRow>
                </form>
            </IonCardContent>
        </IonCard>
    );
};

export default AuthBoxComponent;