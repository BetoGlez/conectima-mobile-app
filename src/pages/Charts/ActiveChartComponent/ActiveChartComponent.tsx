import BurndownChart from "../../../common/charts/BurndownChart/BurndownChart";
import SimulatedCostsChart from "../../../common/charts/SimulatedCostsChart/SimulatedCostsChart";
import { ChartCode } from "../../../models/charts";

interface IActiveChartComponentPorps {
    projectId: string;
    sprintVersion: string;
    chartCode: ChartCode;
}

const ActiveChartComponent: React.FC<IActiveChartComponentPorps> = (props) => {
    const availableCharts = {
        BDC: BurndownChart,
        SCC: SimulatedCostsChart,
        DC: SimulatedCostsChart
    };

    const ActiveChart = availableCharts[props.chartCode];

    return (
        <ActiveChart projectId={props.projectId} sprintVersion={props.sprintVersion} />
    );
};

export default ActiveChartComponent;