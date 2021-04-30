import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { useLocation } from "react-router";

import { IChartsPageParams } from "./ChartsPage.constants";
import AppConfig from "../../app-constants";
import { useLogger } from "../../hooks/logger";
import ChartDescriptionComponent from "../../common/charts/ChartDescriptionComponent/ChartDescriptionComponent";
import ChartTypeSelectorComponent from "../../common/charts/ChartTypeSelectorComponent/ChartTypeSelectorComponent";
import ImageTextMessageComponent from "../../common/generalUiState/ImageTextMessageComponent/ImageTextMessageComponent";
import { IChartType } from "../../models/charts";

const ChartsPage: React.FC = () => {

    const logger = useLogger("ChartsPage");
    const { state } = useLocation<IChartsPageParams>();

    const [activeChart, setActiveChart] = useState<IChartType>();

    const selectChart = (chart: IChartType): void => {
        setActiveChart(chart);
        logger.d("Set active chart: ", chart.code);
    };

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{state?.projectName}</IonTitle>
                    <IonButtons>
                        <IonBackButton defaultHref={AppConfig.APP_ROUTES.ANALYTICS} />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle size="large">{state?.projectName}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <ImageTextMessageComponent imgSrc={AppConfig.ANALYTICS_SPRINT_IMAGE_URL} message={"charts.noChartSelected"}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <ChartTypeSelectorComponent setActiveChart={(chart) => selectChart(chart)}/>
                <ChartDescriptionComponent className="ion-margin-top" sprintVersion={state?.sprintVersion} chartType={activeChart?.type}
                    chartDescription={activeChart?.description} icon={activeChart?.icon} />
            </IonContent>
        </IonPage>
    );
};

export default ChartsPage;