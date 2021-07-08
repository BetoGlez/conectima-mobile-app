import { useQuery } from "@apollo/client";

import { useDevHourCost } from "./settings-hooks";
import { GET_SPRINTS_COMPARE_GENERAL_DATA, GET_SPRINTS_VELOCITY_CHART_DATA } from "../graphql/queries";
import { IGetSprintsCompareGeneralData, IGetSprintsVelocityChartData } from "../graphql/queries-response.model";
import { IProjectIdPayload } from "../graphql/inputs-payload.model";
import { IGeneralCompareSprintData } from "../models/sprints-compare.model";
import { IVelocityChartData } from "../models/charts.model";

export const useCompareGeneralData = (projectId: string, selectedSprints: Array<string>) => {
    const {developerHourCost} = useDevHourCost();
    const {data, loading} = useQuery<IGetSprintsCompareGeneralData, IProjectIdPayload>(GET_SPRINTS_COMPARE_GENERAL_DATA, {
        variables: {projectId}
    });

    const composeGeneralCompareData = (rawCompareData?: IGetSprintsCompareGeneralData): Array<IGeneralCompareSprintData> => {
        let generalCompareData = new Array<IGeneralCompareSprintData>();

        if (rawCompareData && developerHourCost) {
            generalCompareData = rawCompareData.getSprints
                .filter(sprintData => selectedSprints.includes(sprintData.version))
                .map(sprintData => {
                    const consumedTime = sprintData.dedications
                        .reduce((prevDed, currDed) => ({currentHours: prevDed.currentHours + currDed.currentHours}))
                        .currentHours;
                    return {
                        version: sprintData.version,
                        orgEstimation: sprintData.statistics.originalEstimationSp,
                        devEstimation: sprintData.statistics.devEstimationSp,
                        completeness: sprintData.statistics.originalProgressPercentage * 100,
                        simulatedCost: parseFloat((developerHourCost * consumedTime).toFixed(2)),
                        consumedTime
                    } as IGeneralCompareSprintData;
                });
        }

        return generalCompareData;
    };

    return { generalCompareData: composeGeneralCompareData(data), isLoading: loading };
};

export const useVelocityChart = (projectId: string, selectedSprints: Array<string>) => {
    const {data, loading} = useQuery<IGetSprintsVelocityChartData, IProjectIdPayload>(GET_SPRINTS_VELOCITY_CHART_DATA, {
        variables: { projectId }
    });

    const composeVelocityChartData = (rawSprintsVelocityData?: IGetSprintsVelocityChartData): Array<IVelocityChartData> => {
        let velocityChartData = new Array<IVelocityChartData>();

        if (rawSprintsVelocityData) {
            velocityChartData = rawSprintsVelocityData.getSprints
                .filter(sprintData => selectedSprints.includes(sprintData.version))
                .map(sprintData => ({
                    sprint: sprintData.version,
                    commitedSp: sprintData.statistics.originalEstimationSp,
                    completedSp: sprintData.statistics.originalProgressPercentage * sprintData.statistics.originalEstimationSp
                }));
        }

        return velocityChartData;
    };

    return { velocityChartData: composeVelocityChartData(data), isLoading: loading };
};