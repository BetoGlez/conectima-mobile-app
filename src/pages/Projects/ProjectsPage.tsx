import React from "react";
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";

import { GET_PROJECTS_CARDS_DATA } from "../../graphql/queries";
import { IGetProjectsCardsDataResponse } from "../../graphql/queries-response.model";
import ProjectCardComponent from "./ProjectCardComponent/ProjectCardComponent";
import NoDataComponent from "../../common/NoDataComponent/NoDataComponent";
import LoadingComponent from "../../common/LoadingComponent/LoadingComponent";

const ProjectsPage: React.FC = () => {

    const { t } = useTranslation();

    const { data, loading } = useQuery<IGetProjectsCardsDataResponse>(GET_PROJECTS_CARDS_DATA);

    return (
        <React.Fragment>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{t("projects.projects")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent color="light" fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar color="light">
                            <IonTitle size="large">{t("projects.projects")}</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonGrid>
                        { (data?.getProjects && data.getProjects.length > 0) ?
                            data?.getProjects.map(project => (
                                <IonRow key={project.id}>
                                    <IonCol>
                                        <ProjectCardComponent project={project}/>
                                    </IonCol>
                                </IonRow>
                            ))
                            :
                            <NoDataComponent className={"ion-margin-top"}/>
                        }
                    </IonGrid>
                </IonContent>
            </IonPage>
            <LoadingComponent isLoading={loading}/>
        </React.Fragment>
    );
};

export default ProjectsPage;