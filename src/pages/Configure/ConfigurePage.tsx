import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./ConfigurePage.scss";
import { useAuth } from "../../hooks/authentication";
import { useLogout } from "../../hooks/authentication";
import CurrentUserComponent from "./CurrentUserComponent/CurrentUserComponent";
import GeneralSectionComponent from "./GeneralSectionComponent/GeneralSectionComponent";
import MoreSectionComponent from "./MoreSectionComponent/MoreSectionComponent";

const ConfigurePage: React.FC = () => {

    const { t } = useTranslation();

    const { activeUser } = useAuth();
    const { logout } = useLogout();

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
                    { (activeUser?.role) &&
                        <CurrentUserComponent userRole={activeUser.role}/>
                    }
                    { (activeUser?.role?.roleName === "manager") &&
                        <GeneralSectionComponent />
                    }
                    <MoreSectionComponent />
                    <IonRow className="ion-margin-top ion-margin-bottom">
                        <IonCol>
                            <IonButton className="logout-btn" expand="block" onClick={logout}>{t("auth.logout")}</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ConfigurePage;
