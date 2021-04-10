import { IonRow, IonCol, IonList, IonItem, IonIcon, IonLabel, IonNote } from "@ionic/react";
import { informationCircleOutline, phonePortraitOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./MoreSectionComponent.scss";

const MoreSectionComponent: React.FC = () => {

    const { t } = useTranslation();

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
                        <IonItem lines="full" detail>
                            <IonIcon color="secondary" className="opacity-7" icon={informationCircleOutline} slot="start" />
                            <IonLabel>
                                <p>{t("configure.appInfo")}</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon color="secondary" className="opacity-7" icon={phonePortraitOutline} slot="start" />
                            <IonLabel>
                                <p>{t("configure.version")}</p>
                            </IonLabel>
                            <IonNote slot="end">
                                <p className="thin-text">Conectima 1.1.3</p>
                            </IonNote>
                        </IonItem>
                    </IonList>
                </IonCol>
            </IonRow>
        </div>
    );
};

export default MoreSectionComponent;