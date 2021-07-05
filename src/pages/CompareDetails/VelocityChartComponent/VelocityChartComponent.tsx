import VelocityChart from "../../../common/charts/VelocityChart/VelocityChart";

import { ICompareDetailsComponentProps } from "../CompareDetailsPage.constants";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

const VelocityChartComponent: React.FC<ICompareDetailsComponentProps> = ({selectedProjectId, selectedSprints}) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <VelocityChart projectId={selectedProjectId} selectedSprints={selectedSprints} />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default VelocityChartComponent;