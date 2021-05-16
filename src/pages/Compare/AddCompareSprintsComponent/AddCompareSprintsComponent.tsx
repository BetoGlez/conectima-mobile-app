import { useState } from "react";
import { IonCard, IonCol, IonGrid, IonRow, IonSelect, IonItem, IonSelectOption, IonLabel, IonButton } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useLazyQuery, useQuery } from "@apollo/client";

import "./AddCompareSprintsComponent.scss";
import { useLogger } from "../../../hooks/logger";
import PreselectedCompareSprintsComponent from "../PreselectedCompareSprintsComponent/PreselectedCompareSprintsComponent";
import { GET_BASIC_PROJECTS_DATA, GET_BASIC_PROJECT_SPRINTS_DATA } from "../../../graphql/queries";
import { IGetBasicProjectsDataResponse, IGetBasicProjectSprintsDataResponse } from "../../../graphql/queries-response.model";
import { IProjectIdPayload } from "../../../graphql/inputs-payload.model";

const AddCompareSprintsComponent: React.FC = () => {

    const logger = useLogger("AddCompareSprintsComponent");
    const { t } = useTranslation();

    const projectsList = useQuery<IGetBasicProjectsDataResponse>(GET_BASIC_PROJECTS_DATA);
    const [loadSprints, sprintsList] = useLazyQuery<IGetBasicProjectSprintsDataResponse, IProjectIdPayload>(
        GET_BASIC_PROJECT_SPRINTS_DATA);

    const [preselectedSprints, setPreselectedSprints] = useState(new Array<string>());

    const loadSprintsList = (projectId: string): void => {
        logger.d("Selected project: ", projectId);
        loadSprints({ variables: {projectId} });
    };

    const handleSprintSelection = (sprintVersion: string): void => {
        logger.d("Selected sprint: ", sprintVersion);
        setPreselectedSprints(new Array(sprintVersion));
    };

    return (
        <IonCard className="add-compare-sprints-component">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h2 className="opacity-7">{t("sprints.addToCompare")}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="selectable-item" lines="none">
                            <IonLabel className="select-title" position="stacked">{t("projects.projects")}</IonLabel>
                            <IonSelect className="select-list" cancelText={t("general.cancel")} okText={t("general.select")}
                                placeholder={t("projects.select")} disabled={projectsList.loading || !projectsList.data}
                                onIonChange={(event) => loadSprintsList(event.detail.value)}>
                                { projectsList.data?.getProjects.map(project => (
                                    <IonSelectOption key={project.id} value={project.id}>{project.name}</IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="selectable-item" lines="none">
                            <IonLabel className="select-title" position="stacked">{t("sprints.sprints")}</IonLabel>
                            <IonSelect className="select-list" cancelText={t("general.cancel")} okText={t("general.select")}
                                disabled={sprintsList.loading || !sprintsList.data}
                                onIonChange={(event) => handleSprintSelection(event.detail.value)}
                                placeholder={sprintsList.data?.getSprints && sprintsList.data.getSprints.length > 0 ?
                                    t("sprints.select") : t("sprints.noSprints")}>
                                { sprintsList.data?.getSprints.map(sprint => (
                                    <IonSelectOption key={sprint.id} value={sprint.version}>{sprint.version}</IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top">
                    <IonCol>
                        <PreselectedCompareSprintsComponent projectName={"Ipatia"} projectSprints={preselectedSprints}/>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top">
                    <IonCol className="ion-text-center">
                        <IonButton disabled={preselectedSprints.length < 1} className="compare-btn">{t("general.compare")}</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default AddCompareSprintsComponent;