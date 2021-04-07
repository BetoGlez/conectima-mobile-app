import { format, createLogger } from "winston";
import BrowserConsole from "winston-transport-browserconsole";

export const useLogger = (componentName: string) => {
    const logger = createLogger({
        transports: [
            new BrowserConsole(
                {
                    format: format.simple(),
                    level: "debug"
                }
            )
        ]
    });

    const d = (m: string, ...vars: Array<any>) => {
        logger.info(`[${componentName}] - ${m}`, vars[0]);
    };

    const w = (m: string, ...vars: Array<any>) => {
        logger.warn(`[${componentName}] - ${m}`, vars[0]);
    };

    const e = (m: string, ...vars: Array<any>) => {
        logger.error(`[${componentName}] - ${m}`, vars[0]);
    };

    return {d, w, e};
};