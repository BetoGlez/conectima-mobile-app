import { analyticsOutline, pieChartOutline, statsChartOutline } from "ionicons/icons";

import { IChartType } from "../../../models/charts";

export const CHART_TYPES: Array<IChartType> = [
    {
        code: "BDC",
        type: "charts.burndown.cardTitle",
        description: "charts.burndown.cardDescription",
        icon: analyticsOutline
    },
    {
        code: "SCC",
        type: "charts.costs.cardTitle",
        description: "charts.costs.cardDescription",
        icon: statsChartOutline
    },
    {
        code: "DC",
        type: "charts.deviation.cardTitle",
        description: "charts.deviation.cardDescription",
        icon: pieChartOutline
    }
];