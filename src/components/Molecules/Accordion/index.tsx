// React
import React, { FC, ReactElement } from 'react';

// Interface
import IAccordion from './interface';

const Accordion: FC<IAccordion> = ({
    list
}: IAccordion): ReactElement<IAccordion> => {
    return(
        <>
            {list.map((item, index) => (
                <section key={index}>
                    <header>{item.header}</header>
                    <main>{item.content}</main>
                </section>
            ))}
        </>
    );
};

export default Accordion;