import { IDedication } from "./dedication.model";
import { IIssue } from "./issue.model";

export interface ISprint {
    id: string;
    version?: string;
    statistics?: ISprintStatistics;
    issues?: Array<IIssue>;
    issueCount?: number;
    dedications?: Array<IDedication>;
    spsProgress?: Array<ISpProgress>;
}

export interface ISprintStatistics {
    id: string;
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

export interface ISpProgress {
    date?: string;
    sp?: number;
}