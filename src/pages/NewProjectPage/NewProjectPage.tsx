import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage,
    IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { FormikHelpers, useFormik } from "formik";
import moment from "moment";

import "./NewProjectPage.scss";
import LinkSpreadsheetComponent from "./LinkSpreadsheetComponent/LinkSpreadsheetComponent";
import { INewProjectForm, INITIAL_NEW_PROJECT_FORM, NEW_PROJECT_VALIDATION_SCHEMA } from "./NewProjectPage.constants";
import { useLogger } from "../../hooks/logger";
import AppConfig from "../../app-constants";
import { useCreateProject } from "../../hooks/project-hooks";

const NewProjectPage: React.FC = () => {

    const logger = useLogger("NewProjectPage");
    const { t } = useTranslation();
    const history = useHistory();

    const { createProject } = useCreateProject();
    const newProjectForm = useFormik<INewProjectForm>({
        initialValues: INITIAL_NEW_PROJECT_FORM,
        onSubmit: (values, helpers) => createNewProject(values, helpers),
        validationSchema: NEW_PROJECT_VALIDATION_SCHEMA
    });

    const createNewProject = async (values: INewProjectForm, helpers: FormikHelpers<INewProjectForm>): Promise<void> => {
        logger.d("Creating new project: ", values);
        const newProjectResponse = await createProject({variables: {
            name: values.projectName,
            spreadSheetId: values.spreadSheetId,
            startDate: moment().format(AppConfig.DATE_FORMAT)
        }});
        if (newProjectResponse?.data?.createProject && !newProjectResponse?.errors) {
            logger.d("New project created: ", newProjectResponse.data.createProject);
            helpers.resetForm();
            history.goBack();
        }
    };

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
                    <form onSubmit={newProjectForm.handleSubmit}>
                        <IonRow>
                            <IonCol>
                                <IonItem className="conectima-stacked-input" lines="none" color="none">
                                    <IonLabel className="input-title" position="stacked">{t("projects.projectName")}</IonLabel>
                                    <IonInput name="projectName" className="input-field" value={newProjectForm.values.projectName}
                                        onIonChange={newProjectForm.handleChange} type="text" placeholder={t("projects.whatProjectName")}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <LinkSpreadsheetComponent handleChange={newProjectForm.handleChange}
                                    sheetIdValue={newProjectForm.values.spreadSheetId}/>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-margin-top">
                            <IonCol className="ion-text-center">
                                <IonButton disabled={!newProjectForm.isValid} type="submit" expand="block">
                                    {t("projects.createProject")}</IonButton>
                            </IonCol>
                        </IonRow>
                    </form>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default NewProjectPage;