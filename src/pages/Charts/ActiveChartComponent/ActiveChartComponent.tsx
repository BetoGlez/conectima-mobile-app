import React from "react";

import BurndownChart from "../../../common/charts/BurndownChart/BurndownChart";
import SimulatedCostsChart from "../../../common/charts/SimulatedCostsChart/SimulatedCostsChart";
import { ChartCode } from "../../../models/charts";

interface IActiveChartComponentPorps {
    projectId: string;
    sprintVersion: string;
    chartCode: ChartCode;
}

const ActiveChartComponent: React.FC<IActiveChartComponentPorps> = (props) => {
    const ConectimaChart = (chartCode: ChartCode, projectId: string, sprintVersion: string): JSX.Element => {
        const availableCharts = {
            BDC: <BurndownChart projectId={projectId} sprintVersion={sprintVersion}/>,
            SCC: <SimulatedCostsChart projectId={projectId} sprintVersion={sprintVersion} />,
            DC: <div></div>
        };
        return availableCharts[chartCode];
    };

    return (
        ConectimaChart(props.chartCode, props.projectId, props.sprintVersion)
    );
};

export default ActiveChartComponent;