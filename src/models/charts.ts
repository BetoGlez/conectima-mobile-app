export type ChartCode = "BDC" | "SCC" | "DC";

export interface IChartType {
    code: ChartCode;
    type: string;
    description: string;
    cardTitle: string;
    cardDescription: string;
    icon: string;
}

export interface IBurndownChartData {
    day: number;
    date: string;
    originalSp: number;
    goalSp: number;
}