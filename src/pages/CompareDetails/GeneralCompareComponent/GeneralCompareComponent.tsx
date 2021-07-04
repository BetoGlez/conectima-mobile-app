import { IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";

import { ICompareDetailsComponentProps } from "../CompareDetailsPage.constants";
import { useCompareGeneralData } from "../../../hooks/compare-sprints-hooks";

const GeneralCompareComponent: React.FC<ICompareDetailsComponentProps> = ({selectedProjectId, selectedSprints}) => {

    const {generalCompareData, isLoading} = useCompareGeneralData(selectedProjectId, selectedSprints);

    return (
        <IonGrid>
            { generalCompareData.length > 0 &&
                ( generalCompareData.map(compareData => (
                    <IonRow key={compareData.version}>
                        <IonCol>
                            <p>{compareData.version}</p>
                            <p>{compareData.simulatedCost}</p>
                            <p>{compareData.consumedTime}</p>
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