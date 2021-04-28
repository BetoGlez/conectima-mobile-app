import "./ChartTypeSelectorComponent.scss";
import { CHART_TYPES } from "./ChartTypeSelectorComponent.constants";
import ChartTypeCardComponent from "../ChartTypeCardComponent/ChartTypeCardComponent";

const ChartTypeSelectorComponent: React.FC = () => {
    return(
        <div className="chart-type-selector">
            { CHART_TYPES.map(chart =>
                <ChartTypeCardComponent className="chart-card" key={chart.code} isActive={false}
                    type={chart.type} description={chart.description} icon={chart.icon}/>
            )}
        </div>
    );
};

export default ChartTypeSelectorComponent;