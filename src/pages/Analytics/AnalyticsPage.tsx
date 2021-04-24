import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";

import AppConfig from "../../app-constants";
import SelectedSprintCardComponent from "../../common/Sprints/SelectedSprintCard/SelectedSprintCardComponent";
import { IProject } from "../../models/project.model";

// TODO: Remove mock data
const mockProjects: Array<IProject> = [
    {
        id: "1",
        name: "Ipatia"
    },
    {
        id: "2",
        name: "Glamping hub"
    },
    {
        id: "3",
        name: "Brightbyte cloud"
    }
];

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
                    <IonToolbar color="light" className="ion-margin-bottom">
                        <IonTitle className="ion-margin-bottom" size="large">{t("analytics.projectAnalytics")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    { mockProjects.map(project =>
                        <IonRow key={project.id}>
                            <IonCol>
                                <SelectedSprintCardComponent projectData={{projectId: project.id, projectName: project.name}}
                                    confirmText={"analytics.seeAnalytics"} changeText={"sprints.changeSprint"}
                                    imgUrl={AppConfig.ANALYTICS_SPRINT_IMAGE_URL}/>
                            </IonCol>
                        </IonRow>
                    )}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AnalyticsPage;