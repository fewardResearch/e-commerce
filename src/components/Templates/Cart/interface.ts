export default interface CartItem {
    id: number;
    slug?: string;
    image?: string;
    title?: string;
    description?: string;
    price?: number;
    count?: number;
}