import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage,
    IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./NewProjectPage.scss";
import LinkSpreadsheetComponent from "./LinkSpreadsheetComponent/LinkSpreadsheetComponent";
import AppConfig from "../../app-constants";

const NewProjectPage: React.FC = () => {

    const { t } = useTranslation();

    return (
        <IonPage className="new-project-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t("projects.newProject")}</IonTitle>
                    <IonButtons>
                        <IonBackButton defaultHref={AppConfig.APP_ROUTES.PROJECTS} />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle size="large">{t("projects.newProject")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid className="content-grid">
                    <IonRow>
                        <IonCol>
                            <IonItem className="conectima-stacked-input" lines="none" color="none">
                                <IonLabel className="input-title" position="stacked">{t("projects.projectName")}</IonLabel>
                                <IonInput className="input-field" placeholder={t("projects.whatProjectName")}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <LinkSpreadsheetComponent />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default NewProjectPage;