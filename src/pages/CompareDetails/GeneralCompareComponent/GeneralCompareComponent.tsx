import { IonCol, IonGrid, IonRow } from "@ionic/react";

import { ICompareDetailsComponentProps } from "../CompareDetailsPage.constants";

const GeneralCompareComponent: React.FC<ICompareDetailsComponentProps> = ({selectedProjectId, selectedSprints}) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <p>General data</p>
                    <p>{selectedProjectId}</p>
                    <p>{selectedSprints.length}</p>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default GeneralCompareComponent;