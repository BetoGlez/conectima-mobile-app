import { useTranslation } from "react-i18next";

import "./DedicationListComponent.scss";
import UserDedicationComponent from "../UserDedicationComponent/UserDedicationComponent";
import { IDedicationListComponentProps } from "./DedicationListComponent.constants";
import { useUtils } from "../../../hooks/utils";
import { useDedications } from "../../../hooks/dedications";

const DedicationListComponent: React.FC<IDedicationListComponentProps> = ({dedications, totalDays}) => {

    const { t } = useTranslation();

    const { trimStringBeforeChar } = useUtils();
    const { composePercentage } = useDedications();

    return (
        <div className="dedications-list">
            { (dedications && dedications.length > 0) ?
                <div className="dedications">
                    { dedications.map(dedication => (
                        <UserDedicationComponent key={dedication.user} className="dedication"
                            dedicationPercentage={composePercentage(totalDays, dedication.expectedHoursPerDay, dedication.currentHours)}
                            user={trimStringBeforeChar(dedication.user, "@")} hoursPerDay={dedication.expectedHoursPerDay}/>
                    )) }
                </div>
                :
                <p className="no-dedication-data thin-text opacity-7">{t("dedication.noDedications")}</p>
            }
        </div>
    );
};

export default DedicationListComponent;