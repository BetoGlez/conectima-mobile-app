import { IonRow, IonCol } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./CurrentUserComponent.scss";
import { ICurrentUserComponentProps } from "./CurrentUserComponent.constants";

const CurrentUserComponent: React.FC<ICurrentUserComponentProps> = ({userRole}) => {

    const { t } = useTranslation();

    return (
        <div className="current-user-component">
            <IonRow className="ion-margin-top">
                <IonCol>
                    <div className="role-image-container">
                        <img src={userRole.imageSrc} alt="role logo"/>
                    </div>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="ion-text-center opacity-7">
                    <h2>{t(`roles.${userRole.roleName}`)}</h2>
                </IonCol>
            </IonRow>
        </div>
    );
};

export default CurrentUserComponent;