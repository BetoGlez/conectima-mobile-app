import { StatusBar, Style } from "@capacitor/status-bar";
import { isPlatform } from "@ionic/react";

export const useConfig = () => {
    const configStatusBar = async (): Promise<void> => {
        if (isPlatform("capacitor")) {
            await StatusBar.setStyle({ style: Style.Light });
            await StatusBar.setBackgroundColor({ color: "#ffffff" });
        }
    };

    return {configStatusBar};
};