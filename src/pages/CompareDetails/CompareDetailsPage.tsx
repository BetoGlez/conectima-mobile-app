import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonSegment,
    IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CompareDetailsTab, ICompareDetailsPageLocationState } from "./CompareDetailsPage.constants";
import AppConfig from "../../app-constants";

const CompareDetailsPage: React.FC = () => {

    const {state} = useLocation<ICompareDetailsPageLocationState>();
    const { t } = useTranslation();

    const [selectedTab, setSelectedTab] = useState<CompareDetailsTab>("general");

    useEffect(() => {
        console.warn("State: ", state);
    }, [state]);

    return (
        <IonPage>
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
                <IonGrid>
                    <IonRow>
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
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default CompareDetailsPage;