import { IPreselectedSprintData } from "../SelectedSprintCard/SelectedSprintCardComponent.constants";

export interface ISelectSprintModalProps {
    projectId: string;
    onDismiss: (sprintData?: IPreselectedSprintData) => void;
}