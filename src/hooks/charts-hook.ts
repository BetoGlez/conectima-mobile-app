import { useQuery } from "@apollo/client";

import { useUtils } from "./utils";
import { useDevHourCost } from "./settings-hooks";
import { GET_BURNDOWN_CHART_DATA, GET_DEVIATION_PROGRESS_STATS, GET_SIMULATED_COSTS_CHART_DATA } from "../graphql/queries";
import { IGetSprintPayload } from "../graphql/inputs-payload.model";
import { IGetBurndownChartDataResponse, IGetDeviationProgressSatats,
    IGetSimulatedCostsChartDataResponse } from "../graphql/queries-response.model";
import { IBurndownChartData, IDeviationProgressStats, ISimulatedCostsChartData } from "../models/charts.model";

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

export const useSimulatedCostsChart = (projectId: string, sprintVersion: string) => {

    const { getDayNumberBetweenDates, getEmailInitials } = useUtils();
    const { developerHourCost } = useDevHourCost();

    const {data, loading} = useQuery<IGetSimulatedCostsChartDataResponse, IGetSprintPayload>(GET_SIMULATED_COSTS_CHART_DATA, {
        variables: {projectId, sprintVersion}
    });

    const composeSimulatedCostsChartData = (sprintData?: IGetSimulatedCostsChartDataResponse): Array<ISimulatedCostsChartData> => {
        let simulatedCostsChartData = new Array<ISimulatedCostsChartData>();
        if (sprintData && developerHourCost) {
            const sprint = sprintData.getSprint;
            const sprintDaysLength = getDayNumberBetweenDates(sprint.statistics.startDate, sprint.statistics.releaseDate);
            const dedications = sprint.dedications;
            if (sprintDaysLength > 0 && dedications.length > 0) {
                simulatedCostsChartData = dedications.map(dedication => (
                    {
                        shortName: getEmailInitials(dedication.user || ""),
                        email: dedication.user || "",
                        realCost: dedication.currentHours? dedication.currentHours * developerHourCost : 0,
                        expectedCost: dedication.expectedHoursPerDay ?
                            dedication.expectedHoursPerDay * sprintDaysLength *  developerHourCost : 0
                    }
                ));
            }
        }
        return simulatedCostsChartData;
    };

    return { simulatedCostsChartData: composeSimulatedCostsChartData(data), isLoading: loading };
};

export const useDeviationProgressStats = (projectId: string, sprintVersion: string) => {

    const { formatDecimalToPercentage } = useUtils();

    const { data, loading } = useQuery<IGetDeviationProgressSatats, IGetSprintPayload>(GET_DEVIATION_PROGRESS_STATS, {
        variables: {projectId, sprintVersion}
    });

    const composeDeviationProgressStats = (sprintData?: IGetDeviationProgressSatats): IDeviationProgressStats => {
        let deviationProgressStats = {} as IDeviationProgressStats;
        if (sprintData) {
            const sprintStats = sprintData.getSprint.statistics;
            deviationProgressStats = {
                originalDeviationPercentage: formatDecimalToPercentage(sprintStats.originalDeviationPercentage),
                devDeviationPercentage: formatDecimalToPercentage(sprintStats.devDeviationPercentage),
                originalProgressPercentage: formatDecimalToPercentage(sprintStats.originalProgressPercentage),
                devProgressPercentage: formatDecimalToPercentage(sprintStats.devProgressPercentage)
            };
        }
        return deviationProgressStats;
    };

    return { deviationProgressStats: composeDeviationProgressStats(data), isLoading: loading };
};