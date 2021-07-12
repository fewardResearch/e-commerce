// React
import React, { FC, ReactElement, memo } from 'react';

// Molecules
import Picture from 'components/Molecules/Picture'

// Interface
import IBanner from './interface'

const Banner: FC<IBanner> = ({ className, children, contentXPosition, contentYPosition, container, ...rest }: IBanner): ReactElement<IBanner> => {
    return(
        <div className={`${children ? "relative" : ""} ${className ? className : ""}`}>
            <Picture desktop={rest.desktop} mobile={rest.mobile} alt={rest.alt} src={rest.src}  />
            {children && <article className={`z-10 w-full absolute
                ${contentYPosition === "top" ? "top-0" : contentYPosition === "bottom" ? "bottom-0" : "top-1/2 translateY-center"}
                ${contentXPosition === "left" ? "text-left" : contentXPosition === "right" ? "text-right" : "text-center"}
            `}>
                {container ? <div className="container mx-auto">
                    {children}
                </div>: children}
            </article>}
        </div>
    );
};  

export default memo(Banner);