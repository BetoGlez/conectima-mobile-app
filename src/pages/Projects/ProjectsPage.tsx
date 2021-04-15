import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";

import ProjectCardComponent from "./ProjectCardComponent/ProjectCardComponent";
import { mockProjects } from "./ProjectsPage.constants";

const ProjectsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Projects</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle size="large">Projects</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <ProjectCardComponent project={mockProjects[0]}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ProjectsPage;