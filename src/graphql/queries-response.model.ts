export interface IGetProjectsCardsDataResponse {
    getProjects: Array<{
        id: string;
        name: string;
        startDate?: string;
        activeSprint?: {
            id: string;
            version?: string;
            statistics?: {
                id: string;
                startDate?: string;
                releaseDate?: string;
            };
            dedications: Array<{
                user: string;
                currentHours: number;
                expectedHoursPerDay: number;
            }>;
        };
    }>;
}

export interface IGetBasicProjectsDataResponse {
    getProjects: Array<{
        id: string;
        name: string;
    }>;
}

export interface IGetSelectSprintModalDataResponse {
    getSprints: Array<{
        id: string;
        version: string;
        statistics: {
            id: string;
            originalEstimationSp?: number;
            workHoursPerDay?: number;
            startDate?: string;
            releaseDate?: string;
        };
        issueCount: number;
    }>;
}

export interface IGetBurndownChartDataResponse {
    getSprint: {
        id: string;
        statistics: {
            id: string;
            originalEstimationSp?: number;
        };
        spsProgress: Array<{
            date?: string;
            sp?: number;
        }>;
    };
}

export interface IGetSimulatedCostsChartDataResponse {
    getSprint: {
        id: string;
        statistics: {
            id: string;
            startDate?: string;
            releaseDate?: string;
        };
        dedications: Array<{
            user?: string;
            currentHours?: number;
            expectedHoursPerDay?: number;
        }>;
    };
}

export interface IGetDeviationProgressSatats {
    getSprint: {
        id: string;
        statistics: {
            id: string;
            originalDeviationPercentage?: number;
            devDeviationPercentage?: number;
            originalProgressPercentage?: number;
            devProgressPercentage?: number;
        };
    };
}
