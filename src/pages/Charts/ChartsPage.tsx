import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useLocation } from "react-router";

import AppConfig from "../../app-constants";

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
            </IonContent>
        </IonPage>
    );
};

export default ChartsPage;