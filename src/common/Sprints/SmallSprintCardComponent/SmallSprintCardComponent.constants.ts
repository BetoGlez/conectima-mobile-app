import { ISprintStatistics } from "../../../models/sprint.model";
import { IPreselectedSprintData } from "../SelectedSprintCard/SelectedSprintCardComponent.constants";

export interface ISmallSprintCardComponentProps {
    id: string;
    version?: string;
    statistics?: ISprintStatistics;
    issueCount?: number;
    selectSprint: (sprintData: IPreselectedSprintData) => void;
}