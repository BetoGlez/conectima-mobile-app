import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage,
    IonRow, IonTitle, IonToolbar } from "@ionic/react";

import AppConfig from "../../app-constants";

const NewProjectPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>New Project</IonTitle>
                    <IonButtons>
                        <IonBackButton defaultHref={AppConfig.APP_ROUTES.PROJECTS} />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle size="large">New Project</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem className="conectima-stacked-input" lines="none" color="none">
                                <IonLabel className="input-title" position="stacked">Project Name</IonLabel>
                                <IonInput className="input-field" placeholder="What is the name of your project?"/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default NewProjectPage;