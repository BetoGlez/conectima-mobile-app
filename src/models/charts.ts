export type ChartCode = "BDC" | "SCC" | "DC";

export interface IChartType {
    code: ChartCode;
    type: string;
    description: string;
    icon: string;
}