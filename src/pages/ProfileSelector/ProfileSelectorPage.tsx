import { useRef } from "react";
import { IonButton, IonContent, IonFooter, IonPage, IonSlides, IonToolbar } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

import "./ProfileSelectorPage.scss";
import { ROLE_OPTIONS } from "./ProfileSelectorPage.constants";
import RoleOptionComponent from "./RoleOptionComponent/RoleOptionComponent";
import { RoleName } from "../../models/user.model";
import { useAuth } from "../../hooks/authentication";
import AppConfig from "../../app-constants";

const ProfileSelectorPage: React.FC = () => {

    const { t } = useTranslation();
    const history = useHistory();

    const { setLocalUserRole } = useAuth();
    const roleSlider = useRef<HTMLIonSlidesElement>(null);

    const setRoleAndStart = async (): Promise<void> => {
        const activeRoleIndex = await roleSlider.current?.getActiveIndex();
        const activeRole: RoleName = activeRoleIndex === 0 ? "manager" : "developer";
        setLocalUserRole(activeRole);
        history.push(AppConfig.APP_ROUTES.HOME);
    };

    return (
        <IonPage className="profile-selector">
            <IonContent>
                <IonSlides ref={roleSlider} pager>
                    { ROLE_OPTIONS.map(userRole => (
                        <RoleOptionComponent key={userRole.roleName} userRole={userRole}/>
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
};

export default ProfileSelectorPage;