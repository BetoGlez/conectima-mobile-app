import moment from "moment";

import AppConfig from "../app-constants";

export const useUtils = () => {
    const trimStringBeforeChar = (text: string, character: string): string => {
        return text.substr(0, text.indexOf(character));
    };

    const getDayNumberBetweenDates = (startDate?: string, endDate?: string): number => {
        let dayNumber = 0;
        if (startDate && endDate) {
            const startTime = moment(startDate, AppConfig.DATE_FORMAT);
            const endTime = moment(endDate, AppConfig.DATE_FORMAT);
            dayNumber = endTime.diff(startTime, "days", true);
        }
        return dayNumber;
    };

    const getCurrentDateString = (): string => {
        return moment().format(AppConfig.DATE_FORMAT);
    };

    return { trimStringBeforeChar, getDayNumberBetweenDates, getCurrentDateString };
};