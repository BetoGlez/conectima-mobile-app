export interface ISelectedSprintCardComponentProps {
    projectData: ISelectedSprintProjectData;
    confirmText: string;
    changeText: string;
    imgUrl: string;
}

export interface ISelectedSprintProjectData {
    projectId: string;
    projectName: string;
}

export interface IPreselectedSprintData {
    id: string;
    version: string;
}