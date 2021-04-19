export interface ISelectedSprintCardComponentProps {
    projectData: ISelectedSprintProjectData;
    confirmText: string;
    imgUrl: string;
}

export interface ISelectedSprintProjectData {
    projectName: string;
    sprintVersion?: string;
}