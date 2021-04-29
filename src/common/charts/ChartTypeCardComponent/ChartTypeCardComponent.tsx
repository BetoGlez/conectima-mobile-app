import { IonCard, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./ChartTypeCardComponent.scss";

interface IChartTypeCardComponentProps {
    title: string;
    description: string;
    icon: string;
    isActive: boolean;
    selectChart: () => void,
}

const ChartTypeCardComponent: React.FC<IChartTypeCardComponentProps> = ({isActive, title, description, icon, selectChart}) => {

    const { t } = useTranslation();

    return (
        <IonCard onClick={selectChart} className={`chart-type-card ${isActive ? "active-card" : ""}`}>
            <IonGrid>
                <IonRow>
                    <IonCol className="chart-name-container">
                        <p className="chart-name">{t(title)}</p>
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