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

import apolloClient from "./apollo/apollo-config";
import AppConfig from "./app-constants";
import AuthContextProvider from "./context/AuthContextProvider";
import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import ProfileSelectorPage from "./pages/ProfileSelector/ProfileSelectorPage";

const App: React.FC = () => (
    <IonApp>
        <ApolloProvider client={apolloClient}>
            <AuthContextProvider>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route exact path={AppConfig.APP_ROUTES.LOGIN}>
                            <LoginPage />
                        </Route>
                        <Route exact path={AppConfig.APP_ROUTES.PROFILE_SELECTOR}>
                            <ProfileSelectorPage />
                        </Route>
                        <Route path={AppConfig.APP_ROUTES.HOME}>
                            <MainPage />
                        </Route>
                        <Redirect to={AppConfig.APP_ROUTES.LOGIN} />
                    </IonRouterOutlet>
                </IonReactRouter>
            </AuthContextProvider>
        </ApolloProvider>
    </IonApp>
);

export default App;
