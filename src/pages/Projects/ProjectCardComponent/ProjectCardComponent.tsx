import { IonButton, IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import { calendarNumberOutline, refreshOutline, timeOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./ProjectCardComponent.scss";
import DetailDataComponent from "../../../common/DetailDataComponent/DetailDataComponent";
import DedicationListComponent from "../../../common/DedicationListComponent/DedicationListComponent";
import { IProjectCardComponentProps } from "./ProjectCardComponent.constants";

const ProjectCardComponent: React.FC<IProjectCardComponentProps> = ({project: {name, startDate, activeSprint}}) => {

    const { t } = useTranslation();

    return (
        <IonCard className="project-card">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h2>{name}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={calendarNumberOutline} text={"projects.startedOn"}
                            textValues={{startDate}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={timeOutline} text={"projects.ongoingFor"}
                            textValues={{timeOngoing: "3 weeks"}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={refreshOutline} text={"projects.sprintVersion"}
                            textValues={{sprintVersion: activeSprint?.version}}/>
                    </IonCol>
                </IonRow>
                <IonRow className="dedication-title-container">
                    <IonCol>
                        <h2 className="thin-text">{t("projects.dedication")}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DedicationListComponent dedications={activeSprint?.dedications} totalDays={5}/>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-bottom">
                    <IonCol size="6" offset="3" className="ion-text-center">
                        <IonButton fill="outline" expand="block">{t("projects.editProject")}</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default ProjectCardComponent;