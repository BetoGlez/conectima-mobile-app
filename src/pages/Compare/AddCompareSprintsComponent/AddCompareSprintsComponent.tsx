import { IonCard, IonCol, IonGrid, IonRow, IonSelect, IonItem, IonSelectOption, IonLabel, IonButton } from "@ionic/react";
import { useTranslation } from "react-i18next";
import PreselectedCompareSprintsComponent from "../PreselectedCompareSprintsComponent/PreselectedCompareSprintsComponent";

import "./AddCompareSprintsComponent.scss";

const AddCompareSprintsComponent: React.FC = () => {

    const { t } = useTranslation();

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
                                placeholder={t("projects.select")}>
                                <IonSelectOption value="Ipatia">Ipatia</IonSelectOption>
                                <IonSelectOption value="Aerce">Aerce</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="selectable-item" lines="none">
                            <IonLabel className="select-title" position="stacked">{t("sprints.sprints")}</IonLabel>
                            <IonSelect className="select-list" cancelText={t("general.cancel")} okText={t("general.select")}
                                placeholder={t("sprints.select")}>
                                <IonSelectOption value="Ipatia">v3.2.14</IonSelectOption>
                                <IonSelectOption value="Aerce">v1.2.3</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top">
                    <IonCol>
                        <PreselectedCompareSprintsComponent projectName={"Ipatia"} projectSprints={["v1.2.5", "v3.2.17", "v3.5.8"]}/>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top">
                    <IonCol className="ion-text-center">
                        <IonButton className="compare-btn">{t("general.compare")}</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default AddCompareSprintsComponent;