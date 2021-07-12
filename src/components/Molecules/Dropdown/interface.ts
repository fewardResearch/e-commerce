import IList from "../List/interface";

export default interface IDropdown extends IList {
    relative?: boolean;
    icon?: boolean;
    hover?: boolean;
    click?: boolean;
    transition?: boolean;
    type: "default";
}