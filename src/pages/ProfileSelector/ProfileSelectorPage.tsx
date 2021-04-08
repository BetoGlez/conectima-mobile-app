import { useRef } from "react";
import { IonButton, IonContent, IonFooter, IonPage, IonSlides, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./ProfileSelectorPage.scss";
import { ROLE_OPTIONS } from "./ProfileSelector.constants";
import RoleOptionComponent from "./RoleOptionComponent/RoleOptionComponent";
import { UserRole } from "./RoleOptionComponent/RoleOptionComponent.constants";
import { useLogger } from "../../hooks/logger";

const ProfileSelectorPage: React.FC = () => {

    const { t } = useTranslation();
    const logger = useLogger("ProfileSelectorPage");

    const roleSlider = useRef<HTMLIonSlidesElement>(null);

    const setRoleAndStart = async (): Promise<void> => {
        const activeRoleIndex = await roleSlider.current?.getActiveIndex();
        const activeRole: UserRole = activeRoleIndex === 0 ? "manager" : "developer";
        // TODO: Navigate to main screen
        logger.d("Selected role: ", activeRole);
    };

    return (
        <IonPage className="profile-selector">
            <IonContent>
                <IonSlides ref={roleSlider} pager>
                    { ROLE_OPTIONS.map(roleOption => (
                       <RoleOptionComponent key={roleOption.role} roleOption={roleOption}/>
                    ))
                    }
                </IonSlides>
            </IonContent>
            <IonFooter className="ion-no-border">
                <IonToolbar className="ion-text-center ion-padding-bottom">
                    <IonButton className="ion-margin-bottom start-btn" onClick={setRoleAndStart}>
                        {t("general.start")}
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
}

export default ProfileSelectorPage;