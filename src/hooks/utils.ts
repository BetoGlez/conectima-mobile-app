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

    const getEmailInitials = (email: string): string => {
        return email.slice(0, 2).toUpperCase();
    };

    const formatDecimalToPercentage = (value?: number): number => {
        let percentage = 0;
        if (value) {
            percentage = value * 100;
        }
        return percentage;
    };

    return { trimStringBeforeChar, getDayNumberBetweenDates, getCurrentDateString, getEmailInitials, formatDecimalToPercentage };
};