import { useState } from "react";

import "./ChartTypeSelectorComponent.scss";
import { CHART_TYPES } from "./ChartTypeSelectorComponent.constants";
import ChartTypeCardComponent from "../ChartTypeCardComponent/ChartTypeCardComponent";
import { IChartType } from "../../../models/charts.model";

export interface IChartTypeSelectorComponentProps {
    setActiveChart: (chart: IChartType) => void;
}

const ChartTypeSelectorComponent: React.FC<IChartTypeSelectorComponentProps> = ({setActiveChart}) => {

    const [selectedChart, setSelectedChart] = useState<IChartType>();

    const selectChart = (chart: IChartType): void => {
        setSelectedChart(chart);
        setActiveChart(chart);
    };

    return(
        <div className="chart-type-selector">
            { CHART_TYPES.map(chart =>
                <ChartTypeCardComponent key={chart.code} isActive={(selectedChart?.code === chart.code)} title={chart.cardTitle}
                    description={chart.cardDescription} icon={chart.icon} selectChart={() => selectChart(chart)}/>
            )}
        </div>
    );
};

export default ChartTypeSelectorComponent;