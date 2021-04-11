import { useContext } from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

import "./ConfigurePage.scss";
import AuthContext from "../../context/auth-context";
import CurrentUserComponent from "./CurrentUserComponent/CurrentUserComponent";
import GeneralSectionComponent from "./GeneralSectionComponent/GeneralSectionComponent";
import MoreSectionComponent from "./MoreSectionComponent/MoreSectionComponent";
import AppConfig from "../../app-constants";

const ConfigurePage: React.FC = () => {

    const { t } = useTranslation();
    const history = useHistory();

    const authContext = useContext(AuthContext);

    const doLogout = (): void => {
        authContext.logout();
        history.replace(AppConfig.APP_ROUTES.LOGIN);
    };

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
                    <IonRow className="ion-margin-top ion-margin-bottom">
                        <IonCol>
                            <IonButton className="logout-btn" expand="block" onClick={doLogout}>{t("auth.logout")}</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ConfigurePage;
