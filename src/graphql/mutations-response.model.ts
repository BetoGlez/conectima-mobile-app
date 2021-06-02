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