import { IonRow, IonCol, IonGrid } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./DeviationProgressStats.scss";
import { useDeviationProgressStats } from "../../../hooks/charts-hook";
import LoadingComponent from "../../generalUiState/LoadingComponent/LoadingComponent";

interface IDeviationProgressStatsProps {
    projectId: string;
    sprintVersion: string;
}

const DeviationProgressStats: React.FC<IDeviationProgressStatsProps> = ({projectId, sprintVersion}) => {

    const { t } = useTranslation();

    const { deviationProgressStats, isLoading } = useDeviationProgressStats(projectId, sprintVersion);

    return (
        <>
            <IonGrid className="deviation-chart">
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonRow>
                            <IonCol>
                                <h1 className="deviation-percentage thin-text color-primary">
                                    {deviationProgressStats?.originalDeviationPercentage}%</h1>
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
                                <h1 className="deviation-percentage thin-text">
                                    {deviationProgressStats?.devDeviationPercentage}%</h1>
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
                                <h1 className="deviation-percentage thin-text color-primary">
                                    {deviationProgressStats?.originalProgressPercentage}%</h1>
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
                                <h1 className="deviation-percentage thin-text">
                                    {deviationProgressStats?.devProgressPercentage}%</h1>
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
            <LoadingComponent isLoading={isLoading} />
        </>
    );
};

export default DeviationProgressStats;