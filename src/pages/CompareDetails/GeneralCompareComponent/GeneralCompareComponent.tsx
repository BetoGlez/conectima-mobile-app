import { IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./GeneralCompareComponent.scss";
import { ICompareDetailsComponentProps } from "../CompareDetailsPage.constants";
import CompareCardComponent from "../CompareCardComponent/CompareCardComponent";
import { useCompareGeneralData } from "../../../hooks/compare-sprints-hooks";

const GeneralCompareComponent: React.FC<ICompareDetailsComponentProps> = ({selectedProjectId, selectedSprints, selectedProjectName}) => {

    const { t } = useTranslation();

    const {generalCompareData, isLoading} = useCompareGeneralData(selectedProjectId, selectedSprints);

    return (
        <IonGrid className="general-compare-component">
            <IonRow>
                <IonCol className="project-name-container">
                    <h2 className="project-name opacity-7">{selectedProjectName}</h2>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="sprints-legend-container">
                    <p className="sprints-legend opacity-7 thin-text">
                        {t("compare.showingXSprints", {sprintsCount: generalCompareData.length})}</p>
                </IonCol>
            </IonRow>
            { generalCompareData.length > 0 &&
                ( generalCompareData.map(compareData => (
                    <IonRow key={compareData.version}>
                        <IonCol>
                            <CompareCardComponent compareData={compareData}/>
                        </IonCol>
                    </IonRow>
                )))
            }
            { isLoading && !(generalCompareData.length > 0) &&
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonSpinner color="primary"/>
                    </IonCol>
                </IonRow>
            }
        </IonGrid>
    );
};

export default GeneralCompareComponent;