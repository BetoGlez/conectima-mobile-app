import { useIonToast } from "@ionic/react";
import { useTranslation } from "react-i18next";

import AppConfig from "../app-constants";

export const useToast = () => {

    const { t } = useTranslation();
    const [presentToast] = useIonToast();

    const presentInfoToast = (msgKey: string): void => {
        presentToast({
            position: "top",
            message: t(msgKey),
            color: "secondary",
            duration: AppConfig.TOAST_INFO_DURATION_MS
        });
    };

    return { presentInfoToast };
};