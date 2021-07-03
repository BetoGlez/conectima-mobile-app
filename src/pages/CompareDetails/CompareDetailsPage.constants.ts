export type CompareDetailsTab = "general" | "velocity";

export interface ICompareDetailsPageLocationState {
    selectedProjectId: string;
    selectedSprints: Array<string>;
}