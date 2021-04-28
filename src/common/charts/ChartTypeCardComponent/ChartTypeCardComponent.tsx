import { IonCard, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./ChartTypeCardComponent.scss";

interface IChartTypeCardComponentProps {
    type: string;
    description: string;
    icon: string;
    isActive: boolean;
    className?: string;
}

const ChartTypeCardComponent: React.FC<IChartTypeCardComponentProps> = ({isActive, type, description, icon, className}) => {

    const { t } = useTranslation();

    return (
        <IonCard className={`chart-type-card ${isActive ? "active-card" : ""} ${className}`}>
            <IonGrid>
                <IonRow>
                    <IonCol className="chart-name-container">
                        <p className="chart-name">{t(type)}</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="chart-description-container">
                        <p className="thin-text chart-description">{t(description)}</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-end chart-icon-container">
                        <IonIcon className="chart-icon" icon={icon} />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default ChartTypeCardComponent;