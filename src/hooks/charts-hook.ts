import { useQuery } from "@apollo/client";

import { GET_BURNDOWN_CHART_DATA } from "../graphql/queries";
import { IGetSprintPayload } from "../graphql/inputs-payload.model";
import { IGetBurndownChartDataResponse } from "../graphql/queries-response.model";
import { IBurndownChartData } from "../models/charts";

export const useBurndownChart = (projectId: string, sprintVersion: string) => {
    const {data, loading} = useQuery<IGetBurndownChartDataResponse, IGetSprintPayload>(GET_BURNDOWN_CHART_DATA, {
        variables: {projectId, sprintVersion}
    });

    const composeBurndownChartData = (sprintData?: IGetBurndownChartDataResponse): Array<IBurndownChartData> => {
        let burndownChartData = new Array<IBurndownChartData>();
        if (sprintData) {
            const sprint = sprintData.getSprint;
            const originalEstimationSp = sprint.statistics.originalEstimationSp;
            if (originalEstimationSp) {
                const spCurrentRecord = sprint.spsProgress;
                const totalDays = spCurrentRecord.length;
                const averageSpPerDay = originalEstimationSp / totalDays;
                burndownChartData = spCurrentRecord.map((spRecord, index) => (
                    {
                        day: index + 1,
                        date: spRecord.date || "",
                        goalSp: originalEstimationSp - (averageSpPerDay * (index + 1)),
                        originalSp: spRecord.sp || 0
                    }
                ));
            }
        }
        return burndownChartData;
    };

    return {burnDownChartData: composeBurndownChartData(data) , isLoading: loading};
};