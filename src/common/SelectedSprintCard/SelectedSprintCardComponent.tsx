import React from "react";
import { IonButton, IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";

import "./SelectedSprintCardComponent.scss";
import { ISelectedSprintCardComponentProps } from "./SelectedSprintCardComponent.constants";

const SelectedSprintCardComponent: React.FC<ISelectedSprintCardComponentProps> = ({projectData, confirmText, imgUrl}) => {
    return (
        <IonCard className="selected-sprint-card">
            <IonGrid>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <h2 className="opacity-7 project-name">{projectData.projectName}</h2>
                    </IonCol>
                </IonRow>
                { projectData.sprintVersion ?
                    <React.Fragment>
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <p className="thin-text opacity-7 ion-no-margin">Sprint {projectData.sprintVersion}</p>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <img className="sprint-img" src={imgUrl} alt="Card Img"/>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-center ion-margin-bottom">
                                <IonButton>{confirmText}</IonButton>
                            </IonCol>
                        </IonRow>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <IonButton fill="outline" className="ion-margin-bottom ion-margin-top">Select a sprint</IonButton>
                            </IonCol>
                        </IonRow>
                    </React.Fragment>
                }
            </IonGrid>
        </IonCard>
    );
};

export default SelectedSprintCardComponent;