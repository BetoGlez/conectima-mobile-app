import { IonRow, IonCol, IonGrid } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./DeviationProgressStats.scss";

interface IDeviationProgressStatsProps {
    projectId: string;
    sprintVersion: string;
}

const DeviationProgressStats: React.FC<IDeviationProgressStatsProps> = () => {

    const { t } = useTranslation();

    return (
        <IonGrid className="deviation-chart">
            <IonRow>
                <IonCol className="ion-text-center">
                    <IonRow>
                        <IonCol>
                            <h1 className="deviation-percentage thin-text color-primary">-12%</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <h3 className="deviation-legend thin-text">{t("analytics.originalDeviation")}</h3>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol className="ion-text-center">
                    <IonRow>
                        <IonCol>
                            <h1 className="deviation-percentage thin-text">37%</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <h3 className="deviation-legend thin-text">{t("analytics.devDeviation")}</h3>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="ion-text-center">
                    <IonRow>
                        <IonCol>
                            <h1 className="deviation-percentage thin-text color-primary">92%</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <h3 className="deviation-legend thin-text">{t("analytics.originalProgress")}</h3>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol className="ion-text-center">
                    <IonRow>
                        <IonCol>
                            <h1 className="deviation-percentage thin-text">87%</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <h3 className="deviation-legend thin-text">{t("analytics.devProgress")}</h3>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default DeviationProgressStats;