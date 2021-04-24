import { IPreselectedSprintData } from "../SelectedSprintCard/SelectedSprintCardComponent.constants";

export interface ISmallSprintCardComponentProps {
    selectSprint: (sprintData: IPreselectedSprintData) => void;
}