// React
import React, { FC, ReactElement, memo } from 'react';

// Interface
import IButton from './interface';

const Image:FC<IButton> = ({ src, alt, className, width, height }: IButton): ReactElement<IButton> => {
    return(
        <img src={src} alt={alt} className={className} width={width} height={height} />
    );
};

export default memo(Image);