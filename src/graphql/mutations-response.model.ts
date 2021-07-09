export interface ILoginResponse {
    login: {
        id: string;
        email: string;
        username: string;
        token: string;
    }
}

export interface ICreateProjectResponse {
    createProject: {
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
    }
}

export interface ISyncAllProjects {
    syncAllProjects: Array<{
        id: string;
        name: string;
        spreadSheetId: string;
        startDate: string;
        activeSprint: {
            id: string;
            version: string;
            issueCount: number;
            statistics: {
                id: string;
                originalEstimationSp: number;
                devEstimationSp: number;
                originalEstimationHours: number;
                devEstimationHours: number;
                startDate: string;
                releaseDate: string;
                workHoursPerDay: number;
                remainingWorkDays: number;
                originalDeviationPercentage: number;
                devDeviationPercentage: number;
                originalProgressPercentage: number;
                devProgressPercentage: number;
            };
            dedications: Array<{
                user: string;
                currentHours: number;
                expectedHoursPerDay: number;
            }>;
            spsProgress: Array<{
                date: string;
                sp: number;
            }>;
        };
        sprints: Array<{
            id: string;
            version: string;
            issueCount: number;
            statistics: {
                id: string;
                originalEstimationSp: number;
                devEstimationSp: number;
                originalEstimationHours: number;
                devEstimationHours: number;
                startDate: string;
                releaseDate: string;
                workHoursPerDay: number;
                remainingWorkDays: number;
                originalDeviationPercentage: number;
                devDeviationPercentage: number;
                originalProgressPercentage: number;
                devProgressPercentage: number;
            };
            dedications: Array<{
                user: string;
                currentHours: number;
                expectedHoursPerDay: number;
            }>;
            spsProgress: Array<{
                date: string;
                sp: number;
            }>;
        }>;
        dedications: Array<{
            user: string;
            currentHours: number;
            expectedHoursPerDay: number;
        }>;
    }>;
}