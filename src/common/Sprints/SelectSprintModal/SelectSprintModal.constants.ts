import { ISprint } from "../../../models/sprint.model";
import { IPreselectedSprintData, ISelectedSprintProjectData } from "../SelectedSprintCard/SelectedSprintCardComponent.constants";

export interface ISelectSprintModalProps {
    projectData: ISelectedSprintProjectData;
    projectSprints?: Array<ISprint>;
    onDismiss: (sprintData?: IPreselectedSprintData) => void;
}