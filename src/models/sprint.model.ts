import { IDedication } from "./dedication.model";
import { IIssue } from "./issue.model";

export interface ISprint {
    id: string;
    version: string;
    statistics?: ISprintStatistics;
    issues: Array<IIssue>;
    dedications: Array<IDedication>;
}

export interface ISprintStatistics {
    originalEstimationSp?: number;
    devEstimationSp?: number;
    originalEstimationHours?: number;
    devEstimationHours?: number;
    startDate?: string;
    releaseDate?: string;
    workHoursPerDay?: number;
    remainingWorkDays?: number;
    originalDeviationPercentage?: number;
    devDeviationPercentage?: number;
    originalProgressPercentage?: number;
    devProgressPercentage?: number;
  }