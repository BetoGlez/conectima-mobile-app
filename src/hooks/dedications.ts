export const useDedications = () => {

    const composePercentage = (totalDays: number, hoursPerDay: number, currentHours: number): number => {
        let percentage = 0;
        if (hoursPerDay > 0 && totalDays > 0) {
            const totalHours = totalDays * hoursPerDay;
            percentage = currentHours / totalHours;
        }
        return percentage;
    };

    return { composePercentage };
};