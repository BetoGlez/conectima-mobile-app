import { IonIcon } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./DetailDataComponent.scss";
import { IDetailDataComponentProps } from "./DetailDataComponent.constants";

const DetailDataComponent: React.FC<IDetailDataComponentProps> = ({ icon, text, textValues, value, iconColor, isIconOpaque }) => {

    const { t } = useTranslation();

    return (
        <div className="data-detail">
            <IonIcon color={iconColor ? iconColor : "primary"} className={isIconOpaque ? "opacity-5" : ""}
                icon={icon} />
            <div className="detail-body">
                <p className="thin-text">{t(text, textValues)}</p>
                { value && <p className="value-text">{value}</p>}
            </div>
        </div>
    );
};

export default DetailDataComponent;
