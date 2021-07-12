import IButton from "components/Atoms/Button/interface";

export default interface ISocial extends IButton {
    list: {
        title?: string;
        icon?: any;
        url: string;
    }[];
    vertical?: boolean;
    space?: number;
}