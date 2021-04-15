import { IDedication } from "../../models/dedication.model";

export interface IDedicationListComponentProps {
    dedications?: Array<IDedication>;
    totalDays: number;
}