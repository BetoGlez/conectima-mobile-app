import { useQuery } from "@apollo/client";

import { useDevHourCost } from "./settings-hooks";
import { GET_SPRINTS_COMPARE_GENERAL_DATA } from "../graphql/queries";
import { IGetSprintsCompareGeneralData } from "../graphql/queries-response.model";
import { IProjectIdPayload } from "../graphql/inputs-payload.model";
import { IGeneralCompareSprintData } from "../models/general-compare.model";

export const useCompareGeneralData = (projectId: string, selectedSprints: Array<string>) => {
    const {developerHourCost} = useDevHourCost();
    const {data, loading} = useQuery<IGetSprintsCompareGeneralData, IProjectIdPayload>(GET_SPRINTS_COMPARE_GENERAL_DATA, {
        variables: {projectId}
    });

    const composeGeneralCompareData = (rawCompareData?: IGetSprintsCompareGeneralData): Array<IGeneralCompareSprintData> => {
        let generalCompareData = new Array<IGeneralCompareSprintData>();

        if (rawCompareData && developerHourCost) {
            generalCompareData = rawCompareData.getSprints.map(sprintData => {
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
            })
                .filter(sprintData => selectedSprints.includes(sprintData.version));
        }

        return generalCompareData;
    };

    return { generalCompareData: composeGeneralCompareData(data), isLoading: loading };
};