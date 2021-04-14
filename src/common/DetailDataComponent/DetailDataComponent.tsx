import { IonItem, IonIcon, IonLabel } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./DetailDataComponent.scss";
import { IDetailDataComponentProps } from "./DetailDataComponent.constants";

const DetailDataComponent: React.FC<IDetailDataComponentProps> = ({ icon, text, textValues }) => {

    const { t } = useTranslation();

    return (
        <IonItem className="data-detail" lines="none">
            <IonIcon color="primary" slot="start" icon={icon} />
            <IonLabel className="thin-text">{t(text, textValues)}</IonLabel>
        </IonItem>
    );
};

export default DetailDataComponent;
