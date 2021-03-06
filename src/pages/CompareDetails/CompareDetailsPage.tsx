import { useState } from "react";
import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonSegment,
    IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./CompareDetailsPage.scss";
import { CompareDetailsTab, ICompareDetailsPageLocationState } from "./CompareDetailsPage.constants";
import AppConfig from "../../app-constants";
import GeneralCompareComponent from "./GeneralCompareComponent/GeneralCompareComponent";
import VelocityChartTabComponent from "./VelocityChartTabComponent/VelocityChartTabComponent";

const CompareDetailsPage: React.FC = () => {

    const {state: navState} = useLocation<ICompareDetailsPageLocationState>();
    const { t } = useTranslation();

    const [selectedTab, setSelectedTab] = useState<CompareDetailsTab>("general");

    return (
        <IonPage className="compare-details-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{selectedTab === "general" ? t("compare.generalData"): t("compare.velocityChart")}</IonTitle>
                    <IonButtons>
                        <IonBackButton defaultHref={AppConfig.APP_ROUTES.ANALYTICS} />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle size="large">{selectedTab === "general" ? t("compare.generalData"): t("compare.velocityChart")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid className="main-grid">
                    <IonRow className="ion-padding-top">
                        <IonCol offset="3" size="6">
                            <IonSegment value={selectedTab}
                                onIonChange={e => setSelectedTab(e.detail.value as CompareDetailsTab)}>
                                <IonSegmentButton value="general">
                                    <IonLabel>{t("compare.general")}</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="velocity">
                                    <IonLabel>{t("compare.velocity")}</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>
                    { navState && navState.selectedProjectId && navState.selectedSprints &&
                        <IonRow>
                            <IonCol className="tabs-container">
                                { selectedTab === "general" ?
                                    <GeneralCompareComponent selectedProjectId={navState.selectedProjectId}
                                        selectedSprints={navState.selectedSprints} selectedProjectName={navState.selectedProjectName} />
                                    :
                                    <VelocityChartTabComponent selectedProjectId={navState.selectedProjectId}
                                        selectedSprints={navState.selectedSprints} selectedProjectName={navState.selectedProjectName} />
                                }
                            </IonCol>
                        </IonRow>
                    }
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default CompareDetailsPage;