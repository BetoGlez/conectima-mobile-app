import { IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import { hourglassOutline, logoEuro, ribbonOutline, stopwatchOutline, trendingUpOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./CompareCardComponent.scss";
import DetailDataComponent from "../../../common/DetailDataComponent/DetailDataComponent";
import { IGeneralCompareSprintData } from "../../../models/sprints-compare.model";

export interface ICompareCardComponentProps {
    compareData: IGeneralCompareSprintData;
}

const CompareCardComponent: React.FC<ICompareCardComponentProps> = ({compareData}) => {

    const { t } = useTranslation();

    return (
        <IonCard className="compare-card-component">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h2 className="opacity-7 thin-text">{compareData.version}</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={ribbonOutline} text="compare.orgEstimation"
                            value={t("sprints.sp", {sp: compareData.orgEstimation})} iconColor="dark" isIconOpaque={true}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={stopwatchOutline} text="compare.devEstimation"
                            value={t("sprints.sp", {sp: compareData.devEstimation})} iconColor="dark" isIconOpaque={true}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={hourglassOutline} text="compare.consumedTime"
                            value={t("compare.hours", {hours: compareData.consumedTime})} iconColor="dark" isIconOpaque={true}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={trendingUpOutline} text="compare.completeness"
                            value={t("compare.percentage", {percentage: compareData.completeness})} iconColor="dark" isIconOpaque={true}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <DetailDataComponent icon={logoEuro} text="compare.simulatedCost"
                            value={t("costs.euroAmount", {euroAmount: compareData.simulatedCost})} iconColor="dark" isIconOpaque={true}/>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default CompareCardComponent;