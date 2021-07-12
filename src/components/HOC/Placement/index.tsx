// React
import React, { ReactElement, useEffect, useState, memo } from 'react'

// Interface
import IPlacement from './interface'

// Data
import Queries from './data';

const Placement:React.FC<IPlacement> = ({
    Desktop,
    Mobile
}: IPlacement): ReactElement<IPlacement> => {
    const [query, setQuery] = useState<boolean>(false);

    const isMobile = () => {
        setQuery(window.matchMedia(`(max-width: ${Queries.xl}px)`).matches);

        window.addEventListener('resize', () => {
            setQuery(window.matchMedia(`(max-width: ${Queries.xl - 1}px)`).matches);
        });
    };

    useEffect(() => {
        isMobile();
    }, []);

    return(
        <>
            {Mobile && query ? Mobile : ""}
            {Desktop && !query ? Desktop : ""}
        </>
    );
};

export default memo(Placement);