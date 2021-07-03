import { IonCol, IonGrid, IonRow } from "@ionic/react";

import { ICompareDetailsComponentProps } from "../CompareDetailsPage.constants";

const VelocityChartComponent: React.FC<ICompareDetailsComponentProps> = ({selectedProjectId, selectedSprints}) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <p>Velocity Chart</p>
                    <p>{selectedProjectId}</p>
                    <p>{selectedSprints.length}</p>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default VelocityChartComponent;