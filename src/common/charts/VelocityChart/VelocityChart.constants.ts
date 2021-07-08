export interface IVelocityChartProps {
    projectId: string;
    selectedSprints: Array<string>;
}

export const SPRINT_DATA_KEY = "sprint";
export const COMMITED_SP_DATA_KEY = "commitedSp";
export const COMPLETED_SP_DATA_KEY = "completedSp";
export const Y_AXIS_WIDTH = 45;
export const X_AXIS_HEIGHT = 80;
export const BAR_FILL_OPACITY = 0.2;
export const BAR_STROKE_OPACITY = 0.7;