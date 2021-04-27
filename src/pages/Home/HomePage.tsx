import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonLabel } from "@ionic/react";
import { analyticsOutline, folderOpenOutline, gitCompareOutline, settingsOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ProjectsPage from "../Projects/ProjectsPage";
import ComparePage from "../Compare/ComparePage";
import AnalyticsPage from "../Analytics/AnalyticsPage";
import ConfigurePage from "../Configure/ConfigurePage";
import AppConfig from "../../app-constants";

const HomePage: React.FC = () => {

    const { t } = useTranslation();

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path={AppConfig.APP_ROUTES.PROJECTS} component={ProjectsPage} exact />
                <Route path={AppConfig.APP_ROUTES.COMPARE} component={ComparePage} exact/>
                <Route path={AppConfig.APP_ROUTES.ANALYTICS} component={AnalyticsPage} exact />
                <Route path={AppConfig.APP_ROUTES.CONFIGURE} component={ConfigurePage} exact />
                <Redirect exact from={AppConfig.APP_ROUTES.HOME} to={AppConfig.APP_ROUTES.PROJECTS} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="projects-page" href={AppConfig.APP_ROUTES.PROJECTS}>
                    <IonIcon icon={folderOpenOutline}/>
                    <IonLabel>{t("pages.projects")}</IonLabel>
                </IonTabButton>
                <IonTabButton tab="compare-page" href={AppConfig.APP_ROUTES.COMPARE}>
                    <IonIcon icon={gitCompareOutline}/>
                    <IonLabel>{t("pages.compare")}</IonLabel>
                </IonTabButton>
                <IonTabButton tab="analytics-page" href={AppConfig.APP_ROUTES.ANALYTICS}>
                    <IonIcon icon={analyticsOutline}/>
                    <IonLabel>{t("pages.analytics")}</IonLabel>
                </IonTabButton>
                <IonTabButton tab="configure-page" href={AppConfig.APP_ROUTES.CONFIGURE}>
                    <IonIcon icon={settingsOutline}/>
                    <IonLabel>{t("pages.configure")}</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default HomePage;