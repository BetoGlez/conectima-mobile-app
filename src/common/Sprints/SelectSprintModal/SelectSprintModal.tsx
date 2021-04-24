import React from "react";
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonRow } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./SelectSprintModal.scss";
import { ISelectSprintModalProps } from "./SelectSprintModal.constants";
import SmallSprintCardComponent from "../SmallSprintCardComponent/SmallSprintCardComponent";

const SelectSprintModal: React.FC<ISelectSprintModalProps> = ({projectId, onDismiss}) => {

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
                            <h2 className="project-name thin-text">Ipatia</h2>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <SmallSprintCardComponent selectSprint={onDismiss}/>
                        </IonCol>
                    </IonRow>
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