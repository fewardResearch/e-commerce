import type { ReactNode } from "react";

export default interface IAccordion {
    list: {
        header: ReactNode;
        content: ReactNode;
    }[];
}