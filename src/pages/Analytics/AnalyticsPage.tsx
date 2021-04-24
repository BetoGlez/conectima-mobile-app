import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";

import AppConfig from "../../app-constants";
import SelectedSprintCardComponent from "../../common/Sprints/SelectedSprintCard/SelectedSprintCardComponent";

const AnalyticsPage: React.FC = () => {

    const { t } = useTranslation();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t("analytics.projectAnalytics")}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle size="large">{t("analytics.projectAnalytics")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <SelectedSprintCardComponent projectData={{projectId: "1", projectName: "Ipatia"}}
                                confirmText={"analytics.seeAnalytics"} changeText={"sprints.changeSprint"}
                                imgUrl={AppConfig.ANALYTICS_SPRINT_IMAGE_URL}/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <SelectedSprintCardComponent projectData={{projectId: "2", projectName: "Brightbyte cloud"}}
                                confirmText={"analytics.seeAnalytics"} changeText={"sprints.changeSprint"}
                                imgUrl={AppConfig.ANALYTICS_SPRINT_IMAGE_URL}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AnalyticsPage;