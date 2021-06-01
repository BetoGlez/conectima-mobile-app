import { IonButton, IonCard, IonCol, IonGrid, IonInput, IonRow, IonItem, IonIcon, IonLabel } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { copyOutline } from "ionicons/icons";

import "./LinkSpreadsheetComponent.scss";
import AppConfig from "../../../app-constants";

interface ILinkSpreadsheetComponentProps {
    sheetIdValue: string;
    handleChange: any;
}

const LinkSpreadsheetComponent: React.FC<ILinkSpreadsheetComponentProps> = ({ sheetIdValue, handleChange }) => {

    const { t } = useTranslation();

    const copyEmailToClipboard = (): void => {
        navigator.clipboard.writeText(AppConfig.SHEET_PROJECT_SHARE_MAIL);
    };

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
                        <iframe
                            className="instructions-video"
                            frameBorder="0"
                            src={`https://www.youtube.com/embed/${AppConfig.SHEET_CONNECT_INSTRUCTIONS_VIDEO_ID}`}
                            allowFullScreen
                            allow="autoplay"
                        />
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top">
                    <IonCol className="sheet-id-input-container">
                        <IonItem className="conectima-input" lines="none">
                            <IonInput name="spreadSheetId" color="secondary" type="text" placeholder={t("projects.addSheetId")}
                                value={sheetIdValue} onIonChange={handleChange}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonButton className="copy-mail-btn" color="secondary" onClick={copyEmailToClipboard} fill="clear">
                            <IonIcon icon={copyOutline} slot="start"/>
                            <IonLabel>{t("projects.copyShareEmail")}</IonLabel>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default LinkSpreadsheetComponent;