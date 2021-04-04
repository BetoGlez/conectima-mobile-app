import React from "react";

export interface LoggerContextModel {
    d: (m: string, ...vars: Array<any>) => void;
    w: (m: string, ...vars: Array<any>) => void;
    e: (m: string, ...vars: Array<any>) => void;
}

const LoggerContext = React.createContext<LoggerContextModel>({
    d: () => {},
    w: () => {},
    e: () => {}
});

export default LoggerContext;