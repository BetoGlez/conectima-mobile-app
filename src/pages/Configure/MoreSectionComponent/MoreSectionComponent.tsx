import { IonRow, IonCol, IonList, IonItem, IonIcon, IonLabel, IonNote } from "@ionic/react";
import { informationCircleOutline, phonePortraitOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./MoreSectionComponent.scss";
import AppConfig from "../../../app-constants";

const MoreSectionComponent: React.FC = () => {

    const { t } = useTranslation();

    const showAppInfo = (): void => {
        window.open(AppConfig.ABOUT_INFO_URL, "_blank");
    };

    return (
        <div className="more-section-component">
            <IonRow>
                <IonCol>
                    <p className="opacity-7 config-group-title">{t("configure.more")}</p>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonList className="config-group">
                        <IonItem className="app-info-item" lines="full" detail onClick={showAppInfo}>
                            <IonIcon color="secondary" className="opacity-7" icon={informationCircleOutline} slot="start" />
                            <IonLabel>
                                <p>{t("configure.appInfo")}</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem className="app-version-item" lines="none">
                            <IonIcon color="secondary" className="opacity-7" icon={phonePortraitOutline} slot="start" />
                            <IonLabel>
                                <p>{t("configure.version")}</p>
                            </IonLabel>
                            <IonNote slot="end">
                                <p className="thin-text">{`${t("general.appName")} ${AppConfig.APP_VERSION}`}</p>
                            </IonNote>
                        </IonItem>
                    </IonList>
                </IonCol>
            </IonRow>
        </div>
    );
};

export default MoreSectionComponent;