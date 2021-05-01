export const DAY_DATA_KEY = "day";
export const ORIGINAL_SP_DATA_KEY = "originalSp";
export const GOAL_SP_DATA_KEY = "goalSp";
export const MONOTONE_TYPE = "monotone";
export const PRIMARY_HEX_COLOR = "#f26f6b";
export const SECONDARY_HEX_COLOR = "#273342";
export const ACTIVE_DOT_RADIUS = 5;
export const Y_AXIS_WIDTH = 25;
export const X_AXIS_HEIGHT = 70;

export interface IBurndownChartData {
    day: number;
    date: string;
    originalSp: number;
    goalSp: number;
}

export const mockBurndownData: Array<IBurndownChartData> = [
    {
        day: 1,
        date: "26/04/2021",
        originalSp: 28.7,
        goalSp: 25.83
    },
    {
        day: 2,
        date: "27/04/2021",
        originalSp: 25,
        goalSp: 22.96
    },
    {
        day: 3,
        date: "28/04/2021",
        originalSp: 20,
        goalSp: 20.09
    },
    {
        day: 4,
        date: "29/04/2021",
        originalSp: 20,
        goalSp: 17.22
    },
    {
        day: 5,
        date: "30/04/2021",
        originalSp: 16,
        goalSp: 14.35
    },
    {
        day: 6,
        date: "01/05/2021",
        originalSp: 13,
        goalSp: 11.48
    },
    {
        day: 7,
        date: "02/05/2021",
        originalSp: 9,
        goalSp: 8.61
    },
    {
        day: 8,
        date: "03/05/2021",
        originalSp: 5,
        goalSp: 5.74
    },
    {
        day: 9,
        date: "04/05/2021",
        originalSp: 4,
        goalSp: 2.87
    },
    {
        day: 10,
        date: "05/05/2021",
        originalSp: 1,
        goalSp: 0
    },
];