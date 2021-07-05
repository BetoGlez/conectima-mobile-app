import { IVelocityChartProps } from "./VelocityChart.constants";
import { useVelocityChart } from "../../../hooks/compare-sprints-hooks";
import LoadingComponent from "../../generalUiState/LoadingComponent/LoadingComponent";

const VelocityChart: React.FC<IVelocityChartProps> = ({projectId, selectedSprints}) => {

    const {velocityChartData, isLoading} = useVelocityChart(projectId, selectedSprints);

    return (
        <>
            { velocityChartData.length > 0 &&
                <div>Velocity Chart</div>
            }
            <LoadingComponent  isLoading={isLoading} />
        </>
    );
};

export default VelocityChart;