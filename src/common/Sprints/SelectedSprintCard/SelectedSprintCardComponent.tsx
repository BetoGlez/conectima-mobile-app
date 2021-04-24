import React, { useState } from "react";
import { IonButton, IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./SelectedSprintCardComponent.scss";
import { IPreselectedSprintData, ISelectedSprintCardComponentProps } from "./SelectedSprintCardComponent.constants";
import { useModal } from "../../../hooks/popups";
import { useLogger } from "../../../hooks/logger";
import SelectSprintModal from "../SelectSprintModal/SelectSprintModal";
import { ISelectSprintModalProps } from "../SelectSprintModal/SelectSprintModal.constants";

const SelectedSprintCardComponent: React.FC<ISelectedSprintCardComponentProps> = ({projectData, confirmText, changeText, imgUrl}) => {

    const logger = useLogger("SelectedSprintCardComponent");
    const { t } = useTranslation();

    const [sprintData, setSprintData] = useState<IPreselectedSprintData | null>(null);

    const preSelectSprint = (sprintData?: IPreselectedSprintData): void => {
        dismissSprintsModal();
        if (sprintData) {
            logger.d("Preselected sprint: ", sprintData);
            setSprintData({...sprintData});
        } else {
            setSprintData(null);
        }
    };

    const [presentSprintsModal, dismissSprintsModal] = useModal<ISelectSprintModalProps>(SelectSprintModal, {
        projectData: {
            projectId: projectData.projectId,
            projectName: projectData.projectName
        },
        onDismiss: preSelectSprint
    });

    return (
        <IonCard className="selected-sprint-card">
            <IonGrid>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <h2 className="opacity-7 project-name">{projectData.projectName}</h2>
                    </IonCol>
                </IonRow>
                { sprintData ?
                    <React.Fragment>
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <p className="thin-text opacity-7 ion-no-margin">
                                    {t("sprints.sprintVersion", {sprintVersion: sprintData.version})}</p>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <img className="sprint-img" src={imgUrl} alt="Card Img"/>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-margin-bottom">
                            <IonCol className="ion-text-center">
                                <IonButton className="ion-margin-end" fill="outline" onClick={() => presentSprintsModal()}>
                                    {t(changeText)}</IonButton>
                                <IonButton>{t(confirmText)}</IonButton>
                            </IonCol>
                        </IonRow>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <IonButton onClick={() => presentSprintsModal()}
                                    fill="outline" className="ion-margin-bottom ion-margin-top">
                                    {t("sprints.selectSprint")}</IonButton>
                            </IonCol>
                        </IonRow>
                    </React.Fragment>
                }
            </IonGrid>
        </IonCard>
    );
};

export default SelectedSprintCardComponent;