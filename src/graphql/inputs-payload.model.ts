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