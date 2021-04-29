import { IonIcon } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./ChartDescriptionComponent.scss";

export interface IChartDescriptionComponentProps {
    sprintVersion?: string;
    chartType?: string;
    chartDescription?: string;
    icon?: string;
}

const ChartDescriptionComponent: React.FC<IChartDescriptionComponentProps> = ({sprintVersion, chartType, chartDescription, icon}) => {

    const { t } = useTranslation();

    return (
        <div className="chart-description-component">
            { (sprintVersion && chartType && chartDescription && icon) ?
                <>
                    <h2 className="sprint-version">{t("sprints.sprintVersion", {sprintVersion})}</h2>
                    <h2 className="thin-text chart-type">{t(chartType)}</h2>
                    <p className="chart-description">{t(chartDescription)}</p>
                    <div className="icon-container">
                        <IonIcon className="chart-icon" icon={icon}/>
                    </div>
                </>
                :
                <>
                    <h2 className="chart-type">{t("charts.seeCharts")}</h2>
                    <p className="chart-description">{t("charts.chartsPageDetail")}</p>
                </>
            }
        </div>
    );
};

export default ChartDescriptionComponent;