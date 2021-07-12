export default interface IProduct {
    id: number;
    slug: string;
    image: string;
    title: string;
    description?: string;
    price: number;
    oldPrice?: number;
    className?: string;
    countdown?: {
        month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
        day: number;
        year?: number;
        time?: {
            hour: number;
            minute: number;
            second: number;
        };
    };
}