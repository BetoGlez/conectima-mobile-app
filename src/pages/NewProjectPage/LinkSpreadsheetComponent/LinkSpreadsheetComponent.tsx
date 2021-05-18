import { IonCard, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./LinkSpreadsheetComponent.scss";
import AppConfig from "../../../app-constants";

const LinkSpreadsheetComponent: React.FC = () => {

    const { t } = useTranslation();

    return (
        <IonCard className="link-spreadsheet-component">
            <IonGrid>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <h2 className="card-title">{t("projects.linkSpreadsheet")}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <p className="thin-text card-subtitle">{t("projects.connectTrackingLegend")}</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <img className="spreadsheet-img" src={AppConfig.SPREADSHEET_IMAGE_URL} alt="spreadsheet"/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonIcon className="google-icon" icon={logoGoogle}/>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default LinkSpreadsheetComponent;