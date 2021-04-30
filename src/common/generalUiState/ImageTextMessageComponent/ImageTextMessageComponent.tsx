import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./ImageTextMessageComponent.scss";

export interface IImageTextMessageComponentProps {
    message: string;
    imgSrc: string;
    className?: string;
}

const ImageTextMessageComponent: React.FC<IImageTextMessageComponentProps> = ({imgSrc, message, className}) => {

    const { t } = useTranslation();

    return (
        <IonGrid className={`image-text-message-component ${className}`}>
            <IonRow>
                <IonCol className="ion-text-center">
                    <img className="image" src={imgSrc} alt="Message component" />
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="ion-text-center">
                    <h2 className="thin-text">{t(message)}</h2>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ImageTextMessageComponent;