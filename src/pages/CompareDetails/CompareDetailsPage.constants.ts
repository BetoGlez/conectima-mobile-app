export type CompareDetailsTab = "general" | "velocity";

export interface ICompareDetailsComponentProps {
    selectedProjectId: string;
    selectedProjectName: string;
    selectedSprints: Array<string>;
}

export interface ICompareDetailsPageLocationState extends ICompareDetailsComponentProps {}