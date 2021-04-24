import { IonCard, IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import { calendarOutline, checkmarkCircleOutline, hourglassOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./SmallSprintCardComponent.scss";
import { ISmallSprintCardComponentProps } from "./SmallSprintCardComponent.constants";
import DetailDataComponent from "../../DetailDataComponent/DetailDataComponent";
import { useUtils } from "../../../hooks/utils";

const SmallSprintCardComponent: React.FC<ISmallSprintCardComponentProps> = ({id, version, statistics, issueCount, selectSprint}) => {

    const { t } = useTranslation();

    const { getDayNumberBetweenDates } = useUtils();

    return (
        <IonCard className="small-sprint-card">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h2 className="opacity-7">{t("sprints.sprintVersion", {sprintVersion: version || ""})}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={checkmarkCircleOutline} text={"sprints.issues"}
                            textValues={{issueNumber: issueCount || ""}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={hourglassOutline} text={"sprints.sp"}
                            textValues={{sp: statistics?.originalEstimationSp || ""}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={calendarOutline} text={"sprints.duration"}
                            textValues={{
                                days: getDayNumberBetweenDates(statistics?.startDate, statistics?.releaseDate) || "",
                                hoursPerDay: statistics?.workHoursPerDay || ""
                            }}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6" offset="3" className="ion-text-center">
                        <IonButton className="select-sprint-btn" fill="outline"
                            onClick={() => selectSprint({id, version: version || ""})}>
                            {t("general.select")}</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default SmallSprintCardComponent;