import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

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
            </IonContent>
        </IonPage>
    );
};

export default NewProjectPage;