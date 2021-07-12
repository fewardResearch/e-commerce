export default interface INavigation {
    navigation?: {
        id: number;
        title: string;
        url: string;
        children: {
            id: number;
            parent_id: number;
            title: string;
            url: string;
        }[];
    }[];
}

export interface IData {
    id: number;
    title: string;
    url: string;
    children: {
        id: number;
        parent_id: number;
        title: string;
        url: string;
    }[];
}