import React, { useState } from "react";
import { IonButton, IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { useLazyQuery } from "@apollo/client";

import "./SelectedSprintCardComponent.scss";
import { IPreselectedSprintData, ISelectedSprintCardComponentProps } from "./SelectedSprintCardComponent.constants";
import { useModal } from "../../../hooks/popups";
import { useLogger } from "../../../hooks/logger";
import { ISprint } from "../../../models/sprint.model";
import LoadingComponent from "../../generalUiState/LoadingComponent/LoadingComponent";
import SelectSprintModal from "../SelectSprintModal/SelectSprintModal";
import { ISelectSprintModalProps } from "../SelectSprintModal/SelectSprintModal.constants";
import { IGetSelectSprintModalDataResponse } from "../../../graphql/queries-response.model";
import { IProjectIdPayload } from "../../../graphql/inputs-payload.model";
import { GET_SELECT_SPRINT_MODAL_DATA } from "../../../graphql/queries";
import { PROJECT_ID_PARAM, PROJECT_NAME_PARAM, SPRINT_VERSION_PARAM } from "../../../pages/Charts/ChartsPage.constants";
import AppConfig from "../../../app-constants";

const SelectedSprintCardComponent: React.FC<ISelectedSprintCardComponentProps> = ({projectData, confirmText, changeText, imgUrl}) => {

    const logger = useLogger("SelectedSprintCardComponent");
    const { t } = useTranslation();
    const history = useHistory();

    const [selectedSprintData, setSelectedSprintData] = useState<IPreselectedSprintData | null>(null);
    const [projectSprints, setProjectSprints] = useState<Array<ISprint> | undefined>(undefined);

    const loadSprintsAndOpenModal = (sprintsResponse: IGetSelectSprintModalDataResponse): void => {
        setProjectSprints(sprintsResponse.getSprints);
        presentSprintsModal();
    };

    const [getSprints, {loading}] = useLazyQuery<IGetSelectSprintModalDataResponse, IProjectIdPayload>(GET_SELECT_SPRINT_MODAL_DATA, {
        fetchPolicy: "network-only",
        variables: {projectId: projectData.projectId},
        onCompleted: loadSprintsAndOpenModal
    });

    const preSelectSprint = (sprintData?: IPreselectedSprintData): void => {
        dismissSprintsModal();
        if (sprintData) {
            logger.d("Preselected sprint: ", sprintData);
            setSelectedSprintData({...sprintData});
        } else {
            setSelectedSprintData(null);
        }
    };

    const [presentSprintsModal, dismissSprintsModal] = useModal<ISelectSprintModalProps>(SelectSprintModal, {
        projectData: {
            projectId: projectData.projectId,
            projectName: projectData.projectName
        },
        projectSprints,
        onDismiss: preSelectSprint
    });

    const seeAnalytics = (): void => {
        if (selectedSprintData && selectedSprintData.version) {
            logger.d(`Analytics for project: ${projectData.projectId}, sprint version: ${selectedSprintData.version}`);
            history.replace(AppConfig.APP_ROUTES.CHARTS +
                `?${PROJECT_ID_PARAM}=${projectData.projectId}`+
                `&${PROJECT_NAME_PARAM}=${projectData.projectName}`+
                `&${SPRINT_VERSION_PARAM}=${selectedSprintData.version}`);
        }
    };

    return (
        <React.Fragment>
            <IonCard className="selected-sprint-card">
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <h2 className="opacity-7 project-name">{projectData.projectName}</h2>
                        </IonCol>
                    </IonRow>
                    { selectedSprintData ?
                        <React.Fragment>
                            <IonRow>
                                <IonCol className="ion-text-center">
                                    <p className="thin-text opacity-7 ion-no-margin">
                                        {t("sprints.sprintVersion", {sprintVersion: selectedSprintData.version})}</p>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol className="ion-text-center">
                                    <img className="sprint-img" src={imgUrl} alt="Card Img"/>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-margin-bottom">
                                <IonCol className="ion-text-center">
                                    <IonButton className="ion-margin-end" fill="outline" onClick={() => getSprints()}>
                                        {t(changeText)}</IonButton>
                                    <IonButton onClick={seeAnalytics}>{t(confirmText)}</IonButton>
                                </IonCol>
                            </IonRow>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <IonRow>
                                <IonCol className="ion-text-center">
                                    <IonButton onClick={() => getSprints()}
                                        fill="outline" className="ion-margin-bottom ion-margin-top">
                                        {t("sprints.selectSprint")}</IonButton>
                                </IonCol>
                            </IonRow>
                        </React.Fragment>
                    }
                </IonGrid>
            </IonCard>
            <LoadingComponent isLoading={loading} />
        </React.Fragment>
    );
};

export default SelectedSprintCardComponent;