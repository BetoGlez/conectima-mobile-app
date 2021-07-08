import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { statsChartOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./VelocityChartTabComponent.scss";
import { ICompareDetailsComponentProps } from "../CompareDetailsPage.constants";
import VelocityChart from "../../../common/charts/VelocityChart/VelocityChart";

const VelocityChartTabComponent: React.FC<ICompareDetailsComponentProps> = ({selectedProjectId, selectedProjectName, selectedSprints}) => {

    const { t } = useTranslation();

    return (
        <IonGrid className="velocity-chart-tab-component">
            <IonRow>
                <IonCol className="project-name-container">
                    <h2 className="project-name opacity-7">{selectedProjectName}</h2>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="sprints-legend-container">
                    <p className="sprints-legend opacity-7 thin-text">
                        {t("compare.showingXSprints", {sprintsCount: selectedSprints.length})}</p>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="chart-container">
                    <VelocityChart projectId={selectedProjectId} selectedSprints={selectedSprints} />
                </IonCol>
            </IonRow>
            <div className="chart-description">
                <h2 className="title">{t("compare.comparingXSprints", {sprintsCount: selectedSprints.length})}</h2>
                <h2 className="thin-text chart-type">{t("compare.velocityChart")}</h2>
                <p className="text-description">{t("compare.velocityDescription")}</p>
                <div className="icon-container">
                    <IonIcon className="chart-icon" icon={statsChartOutline}/>
                </div>
            </div>
        </IonGrid>
    );
};

export default VelocityChartTabComponent;