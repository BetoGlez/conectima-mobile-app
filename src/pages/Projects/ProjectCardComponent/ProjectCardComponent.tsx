import { IonButton, IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import { calendarNumberOutline, refreshOutline, timeOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import DetailDataComponent from "../../../common/DetailDataComponent/DetailDataComponent";
import UserDedicationComponent from "../../../common/UserDedicationComponent/UserDedicationComponent";

const ProjectCardComponent: React.FC = () => {

    const { t } = useTranslation();

    return (
        <IonCard style={{paddingLeft: "8px", paddingRight: "8px"}}>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h2>Brightbyte Cloud</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={calendarNumberOutline} text={"projects.startedOn"}
                            textValues={{startDate: "19/02/2021"}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={timeOutline} text={"projects.ongoingFor"}
                            textValues={{timeOngoing: "3 weeks"}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={refreshOutline} text={"projects.sprintVersion"}
                            textValues={{sprintVersion: "v2.5.11"}}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <h2 className="thin-text">{t("projects.dedication")}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <UserDedicationComponent user={"agonzalez"} dedicationPercentage={0.6} hoursPerDay={5}/>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top ion-margin-bottom">
                    <IonCol size="6" offset="3" className="ion-text-center">
                        <IonButton fill="outline" expand="block">{t("projects.editProject")}</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default ProjectCardComponent;