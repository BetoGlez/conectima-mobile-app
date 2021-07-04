export interface IDetailDataComponentProps {
    icon: string;
    text: string;
    textValues?: {};
    value?: string;
    iconColor?: "primary" | "secondary" | "tertiary" | "dark" | "light" | "medium";
    isIconOpaque?: boolean;
}