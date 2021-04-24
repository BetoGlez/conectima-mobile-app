import React from "react";
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonRow } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./SelectSprintModal.scss";
import { ISelectSprintModalProps } from "./SelectSprintModal.constants";
import SmallSprintCardComponent from "../SmallSprintCardComponent/SmallSprintCardComponent";
import { ISprint } from "../../../models/sprint.model";

// TODO: Replace with real data, getSprints(projectData.projectId) query
const mockSprints: Array<ISprint> = [
    {
        id: "1",
        version: "v1.2.3",
        statistics: {
            originalEstimationSp: 25,
            workHoursPerDay: 8,
            startDate: "24/04/2021",
            releaseDate: "01/05/2021"
        },
        issueCount: 9
    },
    {
        id: "2",
        version: "v2.5.0",
        statistics: {
            originalEstimationSp: 30,
            workHoursPerDay: 18,
            startDate: "01/05/2021",
            releaseDate: "15/05/2021"
        },
        issueCount: 17
    },
    {
        id: "3",
        version: "v3.0.4",
        statistics: {
            originalEstimationSp: 12,
            workHoursPerDay: 5,
            startDate: "16/05/2021",
            releaseDate: "18/05/2021"
        },
        issueCount: 5
    }
];

const SelectSprintModal: React.FC<ISelectSprintModalProps> = ({projectData, onDismiss}) => {

    const { t } = useTranslation();

    return (
        <React.Fragment>
            <IonContent color="light" className="select-sprint-modal">
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <h1 className="modal-title">{t("sprints.selectSprint")}</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <h2 className="project-name thin-text">{projectData.projectName}</h2>
                        </IonCol>
                    </IonRow>
                    { mockSprints.map(sprint => 
                        <IonRow key={sprint.id}>
                            <IonCol>
                                <SmallSprintCardComponent id={sprint.id} version={sprint.version}
                                    statistics={{
                                        originalEstimationSp: sprint.statistics?.originalEstimationSp,
                                        workHoursPerDay: sprint.statistics?.workHoursPerDay,
                                        startDate: sprint.statistics?.startDate,
                                        releaseDate: sprint.statistics?.releaseDate
                                    }}
                                    issueCount={sprint.issueCount} selectSprint={onDismiss}/>
                            </IonCol>
                        </IonRow>
                    )}
                </IonGrid>
            </IonContent>
            <IonFooter>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonButton fill="clear" expand="block" onClick={() => onDismiss()}>{t("general.cancel")}</IonButton>
                    </IonCol>
                </IonRow>
            </IonFooter>
        </React.Fragment>
    );
};

export default SelectSprintModal;