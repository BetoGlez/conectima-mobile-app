import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useTranslation } from "react-i18next";

import "./ConfigurePage.scss";
import CurrentUserComponent from "./CurrentUserComponent/CurrentUserComponent";
import GeneralSectionComponent from "./GeneralSectionComponent/GeneralSectionComponent";
import MoreSectionComponent from "./MoreSectionComponent/MoreSectionComponent";

const ConfigurePage: React.FC = () => {

    const { t } = useTranslation();

    return (
        <IonPage className="configure-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t("configure.settings")}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle size="large">{t("configure.settings")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid className="config-grid">
                    <CurrentUserComponent userRole={{roleName: "manager", imageSrc: "/assets/images/manager-role.svg"}}/>
                    <GeneralSectionComponent />
                    <MoreSectionComponent />
                    <IonRow className="ion-margin-top">
                        <IonCol>
                            <IonButton className="logout-btn" expand="block">{t("auth.logout")}</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ConfigurePage;
