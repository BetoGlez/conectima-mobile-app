export type CompareDetailsTab = "general" | "velocity";

export interface ICompareDetailsComponentProps {
    selectedProjectId: string;
    selectedSprints: Array<string>;
}

export interface ICompareDetailsPageLocationState extends ICompareDetailsComponentProps {}