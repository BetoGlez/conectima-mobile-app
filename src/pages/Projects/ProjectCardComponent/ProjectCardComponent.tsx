import { IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import { calendarNumberOutline, refreshOutline, timeOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./ProjectCardComponent.scss";
import DetailDataComponent from "../../../common/DetailDataComponent/DetailDataComponent";
import DedicationListComponent from "../../../common/dedications/DedicationListComponent/DedicationListComponent";
import { IProjectCardComponentProps } from "./ProjectCardComponent.constants";
import { useUtils } from "../../../hooks/utils";

const ProjectCardComponent: React.FC<IProjectCardComponentProps> = ({project}) => {

    const { t } = useTranslation();

    const { getDayNumberBetweenDates, getCurrentDateString } = useUtils();
    const activeSprintStats = project.activeSprint?.statistics;

    return (
        <IonCard className="project-card">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h2>{project.name}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={calendarNumberOutline} text={"projects.startedOn"}
                            textValues={{startDate: project.startDate || ""}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={timeOutline} text={"projects.ongoingFor"}
                            textValues={{dayNumber: getDayNumberBetweenDates(project.startDate, getCurrentDateString())}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={refreshOutline} text={"sprints.sprintVersion"}
                            textValues={{sprintVersion: project.activeSprint?.version || ""}}/>
                    </IonCol>
                </IonRow>
                <IonRow className="dedication-title-container">
                    <IonCol>
                        <h2 className="thin-text">{t("projects.dedication")}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DedicationListComponent dedications={project.activeSprint?.dedications}
                            totalDays={getDayNumberBetweenDates(activeSprintStats?.startDate, activeSprintStats?.releaseDate)}/>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default ProjectCardComponent;