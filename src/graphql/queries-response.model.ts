export interface IGetProjectsCardsDataResponse {
    getProjects: Array<{
        id: string;
        name: string;
        startDate?: string;
        activeSprint?: {
            id: string;
            version?: string;
            statistics?: {
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
