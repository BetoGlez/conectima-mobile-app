import { IonChip, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./PreselectedCompareSprintsComponent.scss";

interface IPreselectedCompareSprintsComponentProps {
    projectName: string;
    projectSprints: Array<string>;
    removePreselectedSprint: (sprintVersion: string) => void;
}

const PreselectedCompareSprintsComponent: React.FC<IPreselectedCompareSprintsComponentProps> = ({
    projectName, projectSprints, removePreselectedSprint}) => {

    const { t } = useTranslation();

    return (
        <IonGrid className="preselected-compare-sprints-component ion-no-padding">
            <IonRow>
                <IonCol className="ion-no-padding">
                    <p className="preselected-info thin-text">
                        {t("analytics.sprintsToCompare", {projectName, sprintsCount: projectSprints.length})}
                    </p>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="ion-no-padding">
                    { projectSprints.map(sprint => (
                        <IonChip key={sprint} color="secondary">
                            <IonLabel>{sprint}</IonLabel>
                            <IonIcon className="opacity-7" icon={closeCircleOutline} onClick={() => removePreselectedSprint(sprint)} />
                        </IonChip>
                    ))}
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default PreselectedCompareSprintsComponent;