import { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, isPlatform } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ApolloProvider } from "@apollo/client";
import { StatusBar, Style } from "@capacitor/status-bar";

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
import AppConfig from "./app-constants";
import AuthContextProvider from "./context/AuthContextProvider";
import AuthRoute from "./common/AuthRoute";
import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import ProfileSelectorPage from "./pages/ProfileSelector/ProfileSelectorPage";

const App: React.FC = () => {

    const configStatusBar = async (): Promise<void> => {
        if (isPlatform("capacitor")) {
            await StatusBar.setStyle({ style: Style.Light });
            await StatusBar.setBackgroundColor({ color: "#ffffff" });
        }
    };

    useEffect(() => {
        configStatusBar();
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
                            <AuthRoute exact path={AppConfig.APP_ROUTES.PROFILE_SELECTOR} component={ProfileSelectorPage} />
                            <AuthRoute path={AppConfig.APP_ROUTES.HOME} component={MainPage} />
                            <Redirect to={AppConfig.APP_ROUTES.LOGIN} />
                        </IonRouterOutlet>
                    </IonReactRouter>
                </AuthContextProvider>
            </ApolloProvider>
        </IonApp>
    );
};

export default App;
