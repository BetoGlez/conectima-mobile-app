import { IPreselectedSprintData, ISelectedSprintProjectData } from "../SelectedSprintCard/SelectedSprintCardComponent.constants";

export interface ISelectSprintModalProps {
    projectData: ISelectedSprintProjectData;
    onDismiss: (sprintData?: IPreselectedSprintData) => void;
}