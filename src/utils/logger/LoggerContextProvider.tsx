import React from "react";
import winston from "winston";
import { format } from "winston";
import BrowserConsole from "winston-transport-browserconsole";

import LoggerContext, { LoggerContextModel } from "./logger-context";

const LoggerContextProvider: React.FC = (props) => {

    const logger = winston.createLogger({
        transports: [
            new BrowserConsole(
                {
                    format: winston.format.simple(),
                    level: "debug"
                }
            )
        ]
    });

    const d = (m: string, ...vars: Array<any>) => {
        logger.info(m, vars[0]);
    };

    const w = (m: string, ...vars: Array<any>) => {
        logger.warn(m, vars[0]);
    };

    const e = (m: string, ...vars: Array<any>) => {
        logger.error(m, vars[0]);
    };

    const loggerContext: LoggerContextModel = { d, w, e };

    return (
        <LoggerContext.Provider value={loggerContext}>
            {props.children}
        </LoggerContext.Provider>
    );
};

export default LoggerContextProvider;