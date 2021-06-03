import { IonCol, IonGrid, IonRow, IonIcon } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { useTranslation } from "react-i18next";
import RingLoader from "react-spinners/RingLoader";

import "./LoadingProjectCreationComponent.scss";
import AppConfig from "../../../app-constants";

const LoadingProjectCreationComponent: React.FC = () => {

    const { t } = useTranslation();

    return (
        <IonGrid className="loading-project-creation-component">
            <IonRow>
                <IonCol className="loading-spinner-container">
                    <RingLoader color={AppConfig.PRIMARY_HEX_COLOR} size={70} />
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="ion-text-center">
                    <h2 className="thin-text">{t("projects.creatingProjectAndSyncing")}</h2>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="ion-text-center">
                    <IonIcon className="google-icon" icon={logoGoogle}/>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default LoadingProjectCreationComponent;