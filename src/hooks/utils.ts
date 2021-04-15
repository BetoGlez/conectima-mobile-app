export const useUtils = () => {
    const trimStringBeforeChar = (text: string, character: string): string => {
        return text.substr(0, text.indexOf(character));
    };

    return { trimStringBeforeChar };
};