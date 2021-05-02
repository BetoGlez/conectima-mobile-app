import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";

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
                    <IonToolbar color="light" className="ion-margin-bottom">
                        <IonTitle className="ion-margin-bottom" size="large">{t("pages.compare")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
};

export default ComparePage;