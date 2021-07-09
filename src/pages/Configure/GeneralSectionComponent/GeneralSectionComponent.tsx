import { IonRow, IonCol, IonList, IonItem, IonIcon, IonLabel, IonButton, IonSpinner } from "@ionic/react";
import { logoEuro, syncOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./GeneralSectionComponent.scss";
import { useDevHourCost, useSyncProjects } from "../../../hooks/settings-hooks";

const GeneralSectionComponent: React.FC = () => {

    const { t } = useTranslation();

    const { developerHourCost, selectDeveloperCostHour } = useDevHourCost();
    const { syncAllProjects, isLoading } = useSyncProjects();

    const syncProjects = async () => {
        await syncAllProjects();
    };

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
                        <IonItem className="dev-cost-rate-item" lines="full" detail onClick={selectDeveloperCostHour}>
                            <IonIcon color="secondary" className="opacity-7" icon={logoEuro} slot="start" />
                            <IonLabel>
                                <p>{t("configure.devCostRate")}</p>
                                <p className="thin-text">
                                    {developerHourCost ?
                                        t("costs.hourCost", {hourCost: developerHourCost}) :
                                        t("costs.noCostRate")}
                                </p>
                            </IonLabel>
                        </IonItem>
                        <IonItem className="manual-sync-item" lines="none">
                            <IonIcon color="secondary" className="opacity-7" icon={syncOutline} slot="start" />
                            <IonLabel>
                                <p>{t("configure.syncSpreadsheets")}</p>
                                <p className="thin-text">{t("configure.manualSync")}</p>
                            </IonLabel>
                            { !isLoading ?
                                <IonButton className="sync-button" fill="clear" slot="end" onClick={syncProjects} disabled={isLoading} >
                                    {t("configure.sync")}</IonButton>
                                :
                                <IonSpinner color="primary" slot="end"/>
                            }
                        </IonItem>
                    </IonList>
                </IonCol>
            </IonRow>
        </div>
    );
};

export default GeneralSectionComponent;