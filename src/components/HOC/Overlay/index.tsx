// React
import React, { ReactElement, memo } from 'react'

// Interface
import IOverlay from './interface'

const Overlay:React.FC<IOverlay> = ({
    onClick
}: IOverlay): ReactElement<IOverlay> => {
    return(
        <div className="overlay bg-black w-full h-full fixed top-0 left-0" onClick={() => onClick && onClick()}></div>
    );
};

export default memo(Overlay);