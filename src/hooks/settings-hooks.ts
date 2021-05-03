import { useEffect, useState } from "react";
import { Storage } from "@capacitor/storage";
import { useIonPicker } from "@ionic/react";
import { useTranslation } from "react-i18next";

import AppConfig from "../app-constants";

interface ISelectedCost {
    firstDigit: {
        value: number;
    };
    secondDigit: {
        value: number;
    };
    thirdDigit: {
        value: number;
    };
}

export const useDevHourCost = () => {

    const { t } = useTranslation();
    const [presentPicker, dismissPicker] = useIonPicker();
    const [developerHourCost, setDeveloperHourCost] = useState<number>();

    useEffect(() => {
        getDeveloperHourCost()
            .then(devCost => {
                setDeveloperHourCost(devCost);
            });
    }, []);

    const saveDeveloperHourCost = (selectedCost: ISelectedCost) => {
        const firstDigit = selectedCost?.firstDigit?.value?.toString();
        const secondDigit = selectedCost?.secondDigit?.value?.toString();
        const thirdDigit = selectedCost?.thirdDigit?.value?.toString();
        if (firstDigit && secondDigit && thirdDigit) {
            const developerCost = firstDigit + secondDigit + thirdDigit;
            Storage.set({ key: AppConfig.DEV_COST_STORAGE_KEY, value: developerCost })
                .then(() => setDeveloperHourCost(parseFloat(developerCost)));
        }
    };

    const getDeveloperHourCost = async (): Promise<number> => {
        let developerCostPerHour = 0;
        const { value } = await Storage.get({key: AppConfig.DEV_COST_STORAGE_KEY});
        if (value) {
            developerCostPerHour = parseFloat(value);
        }
        return developerCostPerHour;
    };

    const selectDeveloperCostHour = () => {
        presentPicker({
            columns: [
                { name: "firstDigit", options: [...Array(10).keys()].map((_, index) => ({ text: index.toString(), value: index })) },
                { name: "secondDigit", options: [...Array(10).keys()].map((_, index) => ({ text: index.toString(), value: index }))},
                { name: "thirdDigit", options: [...Array(10).keys()].map((_, index) => ({ text: index.toString(), value: index }))}
            ],
            buttons: [
                { text: t("general.cancel"), handler: () => dismissPicker },
                { text: t("general.confirm"), handler: (selected) => saveDeveloperHourCost(selected) }
            ]
        });
    };

    return { developerHourCost, selectDeveloperCostHour };
};