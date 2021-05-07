import React from "react";
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonRow } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./SelectSprintModal.scss";
import { ISelectSprintModalProps } from "./SelectSprintModal.constants";
import SmallSprintCardComponent from "../SmallSprintCardComponent/SmallSprintCardComponent";
import NoDataComponent from "../../generalUiState/NoDataComponent/NoDataComponent";

const SelectSprintModal: React.FC<ISelectSprintModalProps> = ({projectData, projectSprints, onDismiss}) => {

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
                    { (projectSprints && projectSprints.length) ?
                        projectSprints.map(sprint =>
                            <IonRow key={sprint.id}>
                                <IonCol>
                                    <SmallSprintCardComponent id={sprint.id} version={sprint.version}
                                        statistics={{
                                            id: sprint.statistics?.id || "",
                                            originalEstimationSp: sprint.statistics?.originalEstimationSp,
                                            workHoursPerDay: sprint.statistics?.workHoursPerDay,
                                            startDate: sprint.statistics?.startDate,
                                            releaseDate: sprint.statistics?.releaseDate
                                        }}
                                        issueCount={sprint.issueCount} selectSprint={onDismiss}/>
                                </IonCol>
                            </IonRow>
                        )
                        :
                        <NoDataComponent className="ion-margin-top"/>
                    }
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