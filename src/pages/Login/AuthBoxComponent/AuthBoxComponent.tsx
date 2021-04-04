import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonRow, IonCol, IonItem, IonInput, IonButton } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./AuthBoxComponent.scss";

const AuthBoxComponent: React.FC = () => {

    const { t } = useTranslation();

    return (
        <IonCard className="auth-box">
            <IonCardHeader className="ion-text-center">
                <h2 className="auth-box-title">{t("auth.introduceCredentials")}</h2>
            </IonCardHeader>
            <IonCardContent>
                <IonRow>
                    <IonCol>
                        <IonItem className="conectima-input" lines="none">
                            <IonInput color="secondary" type="email" placeholder={t("auth.email")}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top">
                    <IonCol>
                        <IonItem className="conectima-input" lines="none">
                            <IonInput color="secondary" type="password" placeholder={t("auth.password")}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top">
                    <IonCol size="6" offset="3" className="ion-text-center">
                        <IonButton expand="block">{t("auth.login")}</IonButton>
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
};

export default AuthBoxComponent;