import { IonCard, IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import { calendarOutline, checkmarkCircleOutline, hourglassOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./SmallSprintCardComponent.scss";
import { ISmallSprintCardComponentProps } from "./SmallSprintCardComponent.constants";
import DetailDataComponent from "../../DetailDataComponent/DetailDataComponent";

const SmallSprintCardComponent: React.FC<ISmallSprintCardComponentProps> = ({selectSprint}) => {

    const { t } = useTranslation();

    return (
        <IonCard className="small-sprint-card">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h2 className="opacity-7">{t("sprints.sprintVersion", {sprintVersion: "v1.2.5"})}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={checkmarkCircleOutline} text={"sprints.issues"}
                            textValues={{issueNumber: 12 || ""}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={hourglassOutline} text={"sprints.sp"}
                            textValues={{sp: 10 || ""}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={calendarOutline} text={"sprints.duration"}
                            textValues={{days: 10 || "", hoursPerDay: 18 || ""}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6" offset="3" className="ion-text-center">
                        <IonButton className="select-sprint-btn" fill="outline"
                            onClick={() => selectSprint({id: "2", version: "1.2.3"})}>
                            {t("general.select")}</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default SmallSprintCardComponent;