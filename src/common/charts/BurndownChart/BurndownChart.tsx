import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from "recharts";

import { ACTIVE_DOT_RADIUS, DAY_DATA_KEY, GOAL_SP_DATA_KEY, MONOTONE_TYPE, ORIGINAL_SP_DATA_KEY,
    X_AXIS_HEIGHT, Y_AXIS_WIDTH, IBurndownChartProps } from "./BurndownChart.constants";
import { useBurndownChart } from "../../../hooks/charts-hook";
import LoadingComponent from "../../generalUiState/LoadingComponent/LoadingComponent";
import AppConfig from "../../../app-constants";

const BurndownChart: React.FC<IBurndownChartProps> = ({projectId, sprintVersion}) => {

    const { t } = useTranslation();

    const {burnDownChartData, isLoading} = useBurndownChart(projectId, sprintVersion);

    const formatDayDate = (sprintDay: number, props: Array<any>): ReactNode | undefined => {
        let tootlipMsg = t("sprints.sprintDay", {sprintDay: sprintDay || ""});
        const date = props[0]?.payload?.date as string;
        if (date) {
            tootlipMsg = `${t("sprints.sprintDay", {sprintDay: sprintDay || ""})} - ${date}`;
        }
        return (tootlipMsg);
    };

    const formatTooltipValues = (storyPoints: number, name: string): string | Array<string> => (
        [t("sprints.sp", {sp: storyPoints.toFixed(1) || ""}), t(`sprints.${name}`)]
    );

    const legendFormatter = (name: string): string => (
        t(`sprints.${name}`)
    );

    return (
        <>
            { burnDownChartData.length > 0 &&
                <ResponsiveContainer>
                    <LineChart data={burnDownChartData}>
                        <XAxis dataKey={DAY_DATA_KEY} label={t("sprints.dayInSprint").toString()} height={X_AXIS_HEIGHT}/>
                        <YAxis width={Y_AXIS_WIDTH}/>
                        <Tooltip labelFormatter={formatDayDate} formatter={formatTooltipValues}/>
                        <Legend formatter={legendFormatter} />
                        <Line type={MONOTONE_TYPE}
                            dataKey={ORIGINAL_SP_DATA_KEY}
                            stroke={AppConfig.SECONDARY_HEX_COLOR}
                            activeDot={{ r: ACTIVE_DOT_RADIUS }} />
                        <Line type={MONOTONE_TYPE}
                            dataKey={GOAL_SP_DATA_KEY}
                            stroke={AppConfig.PRIMARY_HEX_COLOR}
                            activeDot={{ r: ACTIVE_DOT_RADIUS }} />
                    </LineChart>
                </ResponsiveContainer>
            }
            <LoadingComponent isLoading={isLoading}/>
        </>
    );
};

export default BurndownChart;
