import VelocityChart from "../../../common/charts/VelocityChart/VelocityChart";

import "./VelocityChartTabComponent.scss";
import { ICompareDetailsComponentProps } from "../CompareDetailsPage.constants";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

const VelocityChartTabComponent: React.FC<ICompareDetailsComponentProps> = ({selectedProjectId, selectedSprints}) => {
    return (
        <IonGrid className="velocity-chart-tab-component">
            <IonRow>
                <IonCol className="chart-container">
                    <VelocityChart projectId={selectedProjectId} selectedSprints={selectedSprints} />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default VelocityChartTabComponent;