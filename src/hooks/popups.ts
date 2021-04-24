import { useIonModal, useIonToast } from "@ionic/react";
import { ReactComponentOrElement } from "@ionic/react/dist/types/hooks/useOverlay";
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

export const useModal = <Type>(component: ReactComponentOrElement, props?: Type) => {
    const [presentModal, dismissModal] = useIonModal(component, {...props});

    return [ presentModal, dismissModal ];
};