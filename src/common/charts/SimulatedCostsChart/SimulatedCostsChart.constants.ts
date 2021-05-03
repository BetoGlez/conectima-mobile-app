import { ISimulatedCostsChartData } from "../../../models/charts";

export const mockCostsData: Array<ISimulatedCostsChartData> = [
    {
        shortName: "RB",
        email: "rbarriuso@tribalyte.com",
        realCost: 505,
        expectedCost: 1154.56,
    },
    {
        shortName: "DL",
        email: "dlopez@tribalyte.com",
        realCost: 201,
        expectedCost: 345.50,
    },
    {
        shortName: "AG",
        email: "agonzalez@tribalyte.com",
        realCost: 505,
        expectedCost: 1154.56,
    },
    {
        shortName: "JC",
        email: "jcftjo@tribalyte.com",
        realCost: 940,
        expectedCost: 1500,
    },
    {
        shortName: "MR",
        email: "mrebordinos@tribalyte.com",
        realCost: 100,
        expectedCost: 1734.3,
    },
    {
        shortName: "AF",
        email: "afernandez@tribalyte.com",
        realCost: 954,
        expectedCost: 500,
    },
];

export const SHORT_NAME_DATA_KEY = "shortName";
export const REAL_COST_DATA_KEY = "realCost";
export const EXPECTED_COST_DATA_KEY = "expectedCost";
export const Y_AXIS_WIDTH = 45;
export const X_AXIS_HEIGHT = 70;
export const BAR_FILL_OPACITY = 0.2;
export const BAR_STROKE_OPACITY = 0.7;