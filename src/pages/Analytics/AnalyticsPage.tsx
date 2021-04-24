import React from "react";
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";

import AppConfig from "../../app-constants";
import NoDataComponent from "../../common/NoDataComponent/NoDataComponent";
import SelectedSprintCardComponent from "../../common/Sprints/SelectedSprintCard/SelectedSprintCardComponent";
import LoadingComponent from "../../common/LoadingComponent/LoadingComponent";
import { GET_BASIC_PROJECTS_DATA } from "../../graphql/queries";
import { IGetBasicProjectsDataResponse } from "../../graphql/queries-response.model";

const AnalyticsPage: React.FC = () => {

    const { t } = useTranslation();

    const {data, loading} = useQuery<IGetBasicProjectsDataResponse>(GET_BASIC_PROJECTS_DATA);

    return (
        <React.Fragment>
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
                        { (data?.getProjects && data.getProjects.length > 0) ?
                            data.getProjects.map(project =>
                                <IonRow key={project.id}>
                                    <IonCol>
                                        <SelectedSprintCardComponent projectData={{projectId: project.id, projectName: project.name}}
                                            confirmText={"analytics.seeAnalytics"} changeText={"sprints.changeSprint"}
                                            imgUrl={AppConfig.ANALYTICS_SPRINT_IMAGE_URL}/>
                                    </IonCol>
                                </IonRow>
                            )
                            :
                            <NoDataComponent className={"ion-margin-top"}/>
                        }
                    </IonGrid>
                </IonContent>
            </IonPage>
            <LoadingComponent isLoading={loading} />
        </React.Fragment>
    );
};

export default AnalyticsPage;