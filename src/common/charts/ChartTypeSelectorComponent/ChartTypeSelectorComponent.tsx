import { useState } from "react";

import "./ChartTypeSelectorComponent.scss";
import { CHART_TYPES } from "./ChartTypeSelectorComponent.constants";
import ChartTypeCardComponent from "../ChartTypeCardComponent/ChartTypeCardComponent";
import { IChartType } from "../../../models/charts.model";
import { useAuth } from "../../../hooks/authentication";

export interface IChartTypeSelectorComponentProps {
    setActiveChart: (chart: IChartType) => void;
}

const ChartTypeSelectorComponent: React.FC<IChartTypeSelectorComponentProps> = ({setActiveChart}) => {

    const { activeUser } = useAuth();
    const [selectedChart, setSelectedChart] = useState<IChartType>();

    const selectChart = (chart: IChartType): void => {
        setSelectedChart(chart);
        setActiveChart(chart);
    };

    return(
        <div className="chart-type-selector">
            { CHART_TYPES
                .filter(chart => !((activeUser?.role?.roleName === "developer") && (chart.code === "SCC")))
                .map(chart =>
                    <ChartTypeCardComponent key={chart.code} isActive={(selectedChart?.code === chart.code)} title={chart.cardTitle}
                        description={chart.cardDescription} icon={chart.icon} selectChart={() => selectChart(chart)}/>
                )
            }
        </div>
    );
};

export default ChartTypeSelectorComponent;