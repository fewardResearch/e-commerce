export default interface IList {
    title?: string;
    vertical?: boolean;
    className?: string;
    list: {
        title: string;
        url: string;
    }[];
}