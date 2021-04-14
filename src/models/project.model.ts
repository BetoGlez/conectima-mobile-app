import { IDedication } from "./dedication.model";
import { ISprint } from "./sprint.model";

export interface IProject {
    id: string;
    name: string;
    spreadSheetId: string;
    startDate: string;
    sprints: Array<ISprint>;
    activeSprint?: ISprint;
    dedications: Array<IDedication>;
}
