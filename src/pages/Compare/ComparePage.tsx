import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";

import AddCompareSprintsComponent from "./AddCompareSprintsComponent/AddCompareSprintsComponent";

const ComparePage: React.FC = () => {

    const { t } = useTranslation();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t("pages.compare")}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                <IonHeader collapse="condense">
                    <IonToolbar color="light">
                        <IonTitle className="ion-margin-bottom" size="large">{t("pages.compare")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <AddCompareSprintsComponent />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ComparePage;