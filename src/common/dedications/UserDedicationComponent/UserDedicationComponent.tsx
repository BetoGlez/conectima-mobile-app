import { IonProgressBar } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./UserDedicationComponent.scss";
import { IUserDedicationComponentProps } from "./UserDedicationComponent.constants";

const UserDedicationComponent: React.FC<IUserDedicationComponentProps> = ({dedicationPercentage, user, hoursPerDay, ...props}) => {

    const { t } = useTranslation();

    return (
        <div className={`user-dedication ${props.className}`}>
            <div className="percentage-circle">
                <p className="dedication-percentage">
                    {t("dedication.percentage", {percentage: Math.round(dedicationPercentage * 100)})}</p>
            </div>
            <div className="progress-container">
                <div className="progress-data">
                    <p className="username-dedication thin-text">{user}</p>
                    <p className="hours-dedication opacity-7">{t("dedication.hoursPerDay", {hours: hoursPerDay})}</p>
                </div>
                <IonProgressBar value={dedicationPercentage} />
            </div>
        </div>
    );
};

export default UserDedicationComponent;