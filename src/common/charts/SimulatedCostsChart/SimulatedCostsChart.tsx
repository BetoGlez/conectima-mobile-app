import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { BAR_FILL_OPACITY, BAR_STROKE_OPACITY, REAL_COST_DATA_KEY, EXPECTED_COST_DATA_KEY, SHORT_NAME_DATA_KEY,
    X_AXIS_HEIGHT, Y_AXIS_WIDTH, ISimulatedCostsChartProps } from "./SimulatedCostsChart.constants";
import AppConfig from "../../../app-constants";
import { useSimulatedCostsChart } from "../../../hooks/charts-hook";
import LoadingComponent from "../../generalUiState/LoadingComponent/LoadingComponent";

const SimulatedCostsChart: React.FC<ISimulatedCostsChartProps> = ({projectId, sprintVersion}) => {

    const { t } = useTranslation();

    const { simulatedCostsChartData, isLoading } = useSimulatedCostsChart(projectId, sprintVersion);

    const formatTooltipLabel = (shortName: string, props: Array<any>): ReactNode | undefined => {
        let tootlipMsg = shortName;
        const email = props[0]?.payload?.email as string;
        if (email) {
            tootlipMsg = email;
        }
        return (tootlipMsg);
    };

    const formatTooltipValues = (cost: number, name: string): string | Array<string> => (
        [t("costs.euroAmount", {euroAmount: cost.toFixed(2) || "-"}), t(`costs.${name}`)]
    );

    const legendFormatter = (name: string): string => (
        t(`costs.${name}`)
    );

    return (
        <>
            {   simulatedCostsChartData.length > 0 &&
                <ResponsiveContainer>
                    <BarChart data={simulatedCostsChartData}>
                        <XAxis dataKey={SHORT_NAME_DATA_KEY} label={t("costs.developerSprintCost").toString()} height={X_AXIS_HEIGHT} />
                        <YAxis width={Y_AXIS_WIDTH}/>
                        <Tooltip labelFormatter={formatTooltipLabel} formatter={formatTooltipValues}/>
                        <Legend formatter={legendFormatter} />
                        <Bar dataKey={REAL_COST_DATA_KEY} fill={AppConfig.PRIMARY_HEX_COLOR} stroke={AppConfig.PRIMARY_HEX_COLOR}
                            fillOpacity={BAR_FILL_OPACITY} strokeOpacity={BAR_STROKE_OPACITY} />
                        <Bar dataKey={EXPECTED_COST_DATA_KEY} fill={AppConfig.SECONDARY_HEX_COLOR} stroke={AppConfig.SECONDARY_HEX_COLOR}
                            fillOpacity={BAR_FILL_OPACITY} strokeOpacity={BAR_STROKE_OPACITY} />
                    </BarChart>
                </ResponsiveContainer>
            }
            <LoadingComponent  isLoading={isLoading} />
        </>
    );
};

export default SimulatedCostsChart;
