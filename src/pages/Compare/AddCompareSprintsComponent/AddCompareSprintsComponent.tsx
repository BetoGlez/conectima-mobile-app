import { IonCard, IonCol, IonGrid, IonRow, IonSelect, IonItem, IonSelectOption, IonLabel, IonButton } from "@ionic/react";

import "./AddCompareSprintsComponent.scss";

const AddCompareSprintsComponent: React.FC = () => {

    return (
        <IonCard className="add-compare-sprints-component">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h2 className="opacity-7">Add sprint to compare</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="selectable-item" lines="none">
                            <IonLabel className="select-title" position="stacked">Projects</IonLabel>
                            <IonSelect className="select-list" cancelText="Cancel" okText="Select" placeholder="Select a project">
                                <IonSelectOption value="Ipatia">Ipatia</IonSelectOption>
                                <IonSelectOption value="Aerce">Aerce</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="selectable-item" lines="none">
                            <IonLabel className="select-title" position="stacked">Sprints</IonLabel>
                            <IonSelect className="select-list" cancelText="Cancel" okText="Select" placeholder="Select a sprint">
                                <IonSelectOption value="Ipatia">v3.2.14</IonSelectOption>
                                <IonSelectOption value="Aerce">v1.2.3</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top">
                    <IonCol className="ion-text-center ion-margin-top">
                        <IonButton>Compare</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default AddCompareSprintsComponent;