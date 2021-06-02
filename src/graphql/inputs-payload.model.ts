export interface ILoginPayload {
    email: string;
    password: string;
}

export interface IProjectIdPayload {
    projectId: string;
}

export interface IGetSprintPayload {
    projectId: string;
    sprintVersion: string;
}

export interface ICreateProjectPayload {
    name: string;
    spreadSheetId: string;
    startDate: string;
}