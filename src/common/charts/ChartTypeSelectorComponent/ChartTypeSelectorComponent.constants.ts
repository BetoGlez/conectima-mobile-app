import { analyticsOutline, pieChartOutline, statsChartOutline } from "ionicons/icons";

import { IChartType } from "../../../models/charts";

export const CHART_TYPES: Array<IChartType> = [
    {
        code: "BDC",
        type: "charts.burndown.type",
        description: "charts.burndown.description",
        cardTitle: "charts.burndown.cardTitle",
        cardDescription: "charts.burndown.cardDescription",
        icon: analyticsOutline
    },
    {
        code: "SCC",
        type: "charts.costs.type",
        description: "charts.costs.description",
        cardTitle: "charts.costs.cardTitle",
        cardDescription: "charts.costs.cardDescription",
        icon: statsChartOutline
    },
    {
        code: "DC",
        type: "charts.deviation.type",
        description: "charts.deviation.description",
        cardTitle: "charts.deviation.cardTitle",
        cardDescription: "charts.deviation.cardDescription",
        icon: pieChartOutline
    }
];