import { IonSlide, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./RoleOptionComponent.scss";
import { IRoleOptionComponentProps } from "./RoleOptionComponent.constants";

const RoleOptionComponent: React.FC<IRoleOptionComponentProps> = ({userRole}) => {

    const { t } = useTranslation();

    return (
        <IonSlide className="role-option">
            <IonGrid className="role-grid">
                <IonRow>
                    <IonCol className="role-prefix-title-container">
                        <h1 className="role-prefix-title">{t("roles.iAm")}</h1>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="role-title-container">
                        <h1 className="role-title">{t(`roles.${userRole.roleName}`)}</h1>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <img className="role-img" src={userRole.imageSrc} alt="Project Role"/>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonSlide>
    );
};

export default RoleOptionComponent;