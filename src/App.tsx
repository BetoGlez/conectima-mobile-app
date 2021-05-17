import { useEffect, useRef } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ApolloProvider } from "@apollo/client";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.scss";
import "./theme/global.scss";

import apolloClient from "./graphql/apollo-config";
import { useConfig } from "./hooks/configuration";
import AppConfig from "./app-constants";
import AuthContextProvider from "./context/AuthContextProvider";
import AuthRoute from "./common/AuthRoute";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import ProfileSelectorPage from "./pages/ProfileSelector/ProfileSelectorPage";
import NewProjectPage from "./pages/NewProjectPage/NewProjectPage";
import ChartsPage from "./pages/Charts/ChartsPage";

const App: React.FC = () => {

    const { configStatusBar } = useConfig();
    const configStatusBarRef = useRef(configStatusBar);

    useEffect(() => {
        configStatusBarRef.current();
    }, []);

    return (
        <IonApp>
            <ApolloProvider client={apolloClient}>
                <AuthContextProvider>
                    <IonReactRouter>
                        <IonRouterOutlet>
                            <Route exact path={AppConfig.APP_ROUTES.LOGIN}>
                                <LoginPage />
                            </Route>
                            <AuthRoute path={AppConfig.APP_ROUTES.HOME} component={HomePage} />
                            <AuthRoute exact path={AppConfig.APP_ROUTES.PROFILE_SELECTOR} component={ProfileSelectorPage} />
                            <AuthRoute exact path={AppConfig.APP_ROUTES.NEW_PROJECT} component={NewProjectPage} />
                            <AuthRoute exact path={AppConfig.APP_ROUTES.CHARTS} component={ChartsPage} />
                            <Redirect to={AppConfig.APP_ROUTES.LOGIN} />
                        </IonRouterOutlet>
                    </IonReactRouter>
                </AuthContextProvider>
            </ApolloProvider>
        </IonApp>
    );
};

export default App;
