import { useState } from "react";

import "./ChartTypeSelectorComponent.scss";
import { CHART_TYPES } from "./ChartTypeSelectorComponent.constants";
import { useLogger } from "../../../hooks/logger";
import ChartTypeCardComponent from "../ChartTypeCardComponent/ChartTypeCardComponent";
import { ChartCode } from "../../../models/charts";

const ChartTypeSelectorComponent: React.FC = () => {

    const logger = useLogger("ChartTypeSelectorComponent");

    const [selectedChart, setSelectedChart] = useState<ChartCode>();

    const selectChart = (chartCode: ChartCode): void => {
        logger.d("Selected chart: ", chartCode);
        setSelectedChart(chartCode);
    };

    return(
        <div className="chart-type-selector">
            { CHART_TYPES.map(chart =>
                <ChartTypeCardComponent key={chart.code} isActive={(selectedChart === chart.code)}
                    type={chart.type} description={chart.description} icon={chart.icon} selectChart={() => selectChart(chart.code)}/>
            )}
        </div>
    );
};

export default ChartTypeSelectorComponent;