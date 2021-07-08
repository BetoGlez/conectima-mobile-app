import { useTranslation } from "react-i18next";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { IVelocityChartProps, X_AXIS_HEIGHT, Y_AXIS_WIDTH, BAR_FILL_OPACITY, BAR_STROKE_OPACITY, SPRINT_DATA_KEY,
    COMMITED_SP_DATA_KEY, COMPLETED_SP_DATA_KEY } from "./VelocityChart.constants";
import { useVelocityChart } from "../../../hooks/compare-sprints-hooks";
import LoadingComponent from "../../generalUiState/LoadingComponent/LoadingComponent";
import AppConfig from "../../../app-constants";

const VelocityChart: React.FC<IVelocityChartProps> = ({projectId, selectedSprints}) => {

    const { t } = useTranslation();

    const {velocityChartData, isLoading} = useVelocityChart(projectId, selectedSprints);

    const formatTooltipValues = (sp: number, name: string): string | Array<string> => (
        [t("sprints.sp", {sp: sp || "-"}), t(`compare.${name}`)]
    );

    const legendFormatter = (name: string): string => (
        t(`compare.${name}`)
    );

    return (
        <>
            { velocityChartData.length > 0 &&
                <ResponsiveContainer>
                    <BarChart data={velocityChartData}>
                        <XAxis dataKey={SPRINT_DATA_KEY} label={t("compare.showingXSprints",
                            {sprintsCount: selectedSprints.length}).toString()} height={X_AXIS_HEIGHT} />
                        <YAxis width={Y_AXIS_WIDTH} />
                        <Tooltip formatter={formatTooltipValues}/>
                        <Legend formatter={legendFormatter} />
                        <Bar dataKey={COMMITED_SP_DATA_KEY} fill={AppConfig.SECONDARY_HEX_COLOR} stroke={AppConfig.SECONDARY_HEX_COLOR}
                            fillOpacity={BAR_FILL_OPACITY} strokeOpacity={BAR_STROKE_OPACITY} />
                        <Bar dataKey={COMPLETED_SP_DATA_KEY} fill={AppConfig.PRIMARY_HEX_COLOR} stroke={AppConfig.PRIMARY_HEX_COLOR}
                            fillOpacity={BAR_FILL_OPACITY} strokeOpacity={BAR_STROKE_OPACITY} />
                    </BarChart>
                </ResponsiveContainer>
            }
            <LoadingComponent  isLoading={isLoading} />
        </>
    );
};

export default VelocityChart;