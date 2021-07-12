export default interface IFooterMenu {
    title: string;
    url: string;
    children?: {
        title: string;
        url: string;
    }[];
}