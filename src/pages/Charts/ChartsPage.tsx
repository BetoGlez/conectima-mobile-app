import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { analyticsOutline } from "ionicons/icons";
import { useLocation } from "react-router";

import AppConfig from "../../app-constants";
import ChartTypeCardComponent from "../../common/charts/ChartTypeCardComponent/ChartTypeCardComponent";

export interface IChartsPageParams {
    projectId: string;
    projectName: string;
    sprintVersion: string;
}

const ChartsPage: React.FC = () => {

    const { state } = useLocation<IChartsPageParams>();

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
                            <ChartTypeCardComponent isActive={false} type={"charts.burndown.cardTitle"}
                                description={"charts.burndown.cardDescription"} icon={analyticsOutline}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ChartsPage;