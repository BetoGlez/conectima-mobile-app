import { IonLoading } from "@ionic/react";

import { ILoadingComponentProps } from "./LoadingComponent.constants";

const LoadingComponent: React.FC<ILoadingComponentProps> = ({isLoading}) => {
    return (
        <IonLoading isOpen={isLoading} cssClass="conectima-loading" spinner="bubbles"/>
    );
};

export default LoadingComponent;