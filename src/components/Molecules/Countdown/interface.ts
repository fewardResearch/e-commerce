export default interface ICountDown {
    month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    day: number;
    year?: number;
    time?: {
        hour: number;
        minute: number;
        second: number;
    };
    className?: string;
}

export interface RemainingTime {
    day: number;
    hour: number;
    minute: number;
    second: number;
}