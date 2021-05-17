import { useRef, useState } from "react";
import { IonCard, IonCol, IonGrid, IonRow, IonSelect, IonItem, IonSelectOption, IonLabel, IonButton } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useLazyQuery, useQuery } from "@apollo/client";

import "./AddCompareSprintsComponent.scss";
import { useLogger } from "../../../hooks/logger";
import PreselectedCompareSprintsComponent from "../PreselectedCompareSprintsComponent/PreselectedCompareSprintsComponent";
import { GET_BASIC_PROJECTS_DATA, GET_BASIC_PROJECT_SPRINTS_DATA } from "../../../graphql/queries";
import { IGetBasicProjectsDataResponse, IGetBasicProjectSprintsDataResponse } from "../../../graphql/queries-response.model";
import { IProjectIdPayload } from "../../../graphql/inputs-payload.model";

interface IPreselectedProject {
    id: string;
    name: string;
}

const AddCompareSprintsComponent: React.FC = () => {

    const logger = useLogger("AddCompareSprintsComponent");
    const { t } = useTranslation();

    const projectsList = useQuery<IGetBasicProjectsDataResponse>(GET_BASIC_PROJECTS_DATA);
    const [loadSprints, sprintsList] = useLazyQuery<IGetBasicProjectSprintsDataResponse, IProjectIdPayload>(
        GET_BASIC_PROJECT_SPRINTS_DATA);

    const sprintsSelector = useRef<HTMLIonSelectElement>(null);
    const [preselectedSprints, setPreselectedSprints] = useState(new Array<string>());
    const [preselectedProject, setPreselectedProject] = useState<IPreselectedProject | null>(null);

    const loadSprintsList = (projectId: string): void => {
        const projects = projectsList.data?.getProjects;
        if (projects) {
            const selectedProject = projects.find(project => project.id === projectId);
            if (selectedProject) {
                logger.d("Selected project: ", selectedProject.name);
                setPreselectedProject(selectedProject);
                setPreselectedSprints(new Array<string>());
                loadSprints({ variables: {projectId: selectedProject.id} });
            }
        }
    };

    const handleSprintSelection = (sprintVersion: string | null): void => {
        if (sprintVersion) {
            const sprintIndex = preselectedSprints.findIndex(sprint => sprint === sprintVersion);
            if (sprintIndex < 0) {
                logger.d("Sprint not added previously, adding it... ", sprintVersion);
                const newSprintList = [...preselectedSprints];
                newSprintList.push(sprintVersion);
                setPreselectedSprints(newSprintList);
            }
        }
    };

    const resetSprintSelector = (): void => {
        sprintsSelector.current!.value = null;
    };

    const removePreselectedSprint = (sprintVersion: string): void => {
        if (sprintVersion) {
            logger.d("Removing sprint: ", sprintVersion);
            const newSprintList = preselectedSprints.filter(sprint => sprint !== sprintVersion);
            setPreselectedSprints(newSprintList);
        }
    };

    const compareSprints = (): void => {
        logger.d("Compare project: ", preselectedProject?.name);
        logger.d("Compare sprints: ", preselectedSprints);
        setPreselectedProject(null);
        setPreselectedSprints(new Array<string>());
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
                        <IonItem className="conectima-selectable-item" lines="none">
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
                        <IonItem className="conectima-selectable-item" lines="none">
                            <IonLabel className="select-title" position="stacked">{t("sprints.sprints")}</IonLabel>
                            <IonSelect ref={sprintsSelector} className="select-list" cancelText={t("general.cancel")}
                                okText={t("general.select")} disabled={sprintsList.loading || !sprintsList.data?.getSprints.length}
                                onIonChange={(event) => handleSprintSelection(event.detail.value)} onClick={resetSprintSelector}
                                placeholder={sprintsList.data?.getSprints && sprintsList.data.getSprints.length > 0 ?
                                    t("sprints.select") : t("sprints.noSprints")}>
                                { sprintsList.data?.getSprints.map(sprint => (
                                    <IonSelectOption key={sprint.id} value={sprint.version}>{sprint.version}</IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                { preselectedProject &&
                    <IonRow className="ion-margin-top">
                        <IonCol>
                            <PreselectedCompareSprintsComponent projectName={preselectedProject.name}
                                projectSprints={preselectedSprints} removePreselectedSprint={removePreselectedSprint}/>
                        </IonCol>
                    </IonRow>
                }
                <IonRow className="ion-margin-top">
                    <IonCol className="ion-text-center">
                        <IonButton disabled={preselectedSprints.length < 1} className="compare-btn" onClick={compareSprints}>
                            {t("general.compare")}</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default AddCompareSprintsComponent;