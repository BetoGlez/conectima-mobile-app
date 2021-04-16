import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./NoDataComponent.scss";
import { INoDataComponentProps } from "./NoDataComponent.constants";
import AppConfig from "../../app-constants";

const NoDataComponent: React.FC<INoDataComponentProps> = ({className}) => {

    const { t } = useTranslation();

    return (
        <IonGrid className={`no-data ${className}`}>
            <IonRow>
                <IonCol className="ion-text-center">
                    <img className="image" src={AppConfig.NO_DATA_IMAGE_URL} alt="no-data" />
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="ion-text-center">
                    <h2 className="thin-text">{t("general.noData")}</h2>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default NoDataComponent;
