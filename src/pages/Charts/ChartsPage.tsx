import { useState } from "react";
import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useLocation } from "react-router";

import "./ChartsPage.scss";
import AppConfig from "../../app-constants";
import { useLogger } from "../../hooks/logger";
import ActiveChartComponent from "./ActiveChartComponent/ActiveChartComponent";
import ChartDescriptionComponent from "../../common/charts/ChartDescriptionComponent/ChartDescriptionComponent";
import ChartTypeSelectorComponent from "../../common/charts/ChartTypeSelectorComponent/ChartTypeSelectorComponent";
import ImageTextMessageComponent from "../../common/generalUiState/ImageTextMessageComponent/ImageTextMessageComponent";
import { IChartType } from "../../models/charts";

const ChartsPage: React.FC = () => {

    const logger = useLogger("ChartsPage");
    const { search } = useLocation();
    const projectId = new URLSearchParams(search).get("projectId");
    const projectName = new URLSearchParams(search).get("projectName");
    const sprintVersion = new URLSearchParams(search).get("sprintVersion");

    const [activeChart, setActiveChart] = useState<IChartType>();

    const selectChart = (chart: IChartType): void => {
        setActiveChart(chart);
        logger.d("Set active chart: ", chart.code);
    };

    return(
        <IonPage className="charts-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{projectName}</IonTitle>
                    <IonButtons>
                        <IonBackButton defaultHref={AppConfig.APP_ROUTES.ANALYTICS} />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle size="large">{projectName}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol className="chart-container">
                            { activeChart && projectId && sprintVersion ?
                                <ActiveChartComponent chartCode={activeChart.code} projectId={projectId} sprintVersion={sprintVersion}/>
                                :
                                <ImageTextMessageComponent className="no-chart-selected" imgSrc={AppConfig.ANALYTICS_SPRINT_IMAGE_URL}
                                    message={"charts.noChartSelected"}/>
                            }
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <ChartTypeSelectorComponent setActiveChart={(chart) => selectChart(chart)}/>
                <ChartDescriptionComponent className="ion-margin-top" sprintVersion={sprintVersion || ""} chartType={activeChart?.type}
                    chartDescription={activeChart?.description} icon={activeChart?.icon} />
            </IonContent>
        </IonPage>
    );
};

export default ChartsPage;