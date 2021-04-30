import { INoDataComponentProps } from "./NoDataComponent.constants";
import AppConfig from "../../../app-constants";
import ImageTextMessageComponent from "../ImageTextMessageComponent/ImageTextMessageComponent";

const NoDataComponent: React.FC<INoDataComponentProps> = ({className}) => (
    <ImageTextMessageComponent className={className} imgSrc={AppConfig.NO_DATA_IMAGE_URL} message={"general.noData"}/>
);

export default NoDataComponent;
