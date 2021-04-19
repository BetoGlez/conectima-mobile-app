import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import AppConfig from "../../app-constants";
import SelectedSprintCardComponent from "../../common/SelectedSprintCard/SelectedSprintCardComponent";

const AnalyticsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Projects analytics</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle size="large">Projects analytics</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <SelectedSprintCardComponent projectData={{projectName: "Ipatia", sprintVersion: "v3.2.14"}}
                                confirmText={"See analytics"} imgUrl={AppConfig.ANALYTICS_SPRINT_IMAGE_URL}/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <SelectedSprintCardComponent projectData={{projectName: "Brightbyte cloud"}}
                                confirmText={"See analytics"} imgUrl={AppConfig.ANALYTICS_SPRINT_IMAGE_URL}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AnalyticsPage;