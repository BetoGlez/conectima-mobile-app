import { IonRow, IonCol, IonList, IonItem, IonIcon, IonLabel, IonToggle } from "@ionic/react";
import { logoEuro, notificationsOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./GeneralSectionComponent.scss";

const GeneralSectionComponent: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className="general-section-component">
            <IonRow>
                <IonCol>
                    <p className="opacity-7 config-group-title">{t("configure.general")}</p>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonList className="config-group">
                        <IonItem lines="full" detail>
                            <IonIcon color="secondary" className="opacity-7" icon={logoEuro} slot="start" />
                            <IonLabel>
                                <p>{t("configure.devCostRate")}</p>
                                <p className="thin-text">25 € / h</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon color="secondary" className="opacity-7" icon={notificationsOutline} slot="start" />
                            <IonLabel>
                                <p>{t("configure.emailNotifications")}</p>
                                <p className="thin-text">{t("general.off")}</p>
                            </IonLabel>
                            <IonToggle slot="end"></IonToggle>
                        </IonItem>
                    </IonList>
                </IonCol>
            </IonRow>
        </div>
    );
};

export default GeneralSectionComponent;