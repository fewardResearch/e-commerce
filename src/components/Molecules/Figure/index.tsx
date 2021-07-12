// React
import React, { FC, ReactElement, memo } from 'react';

// Atoms
import Image from 'components/Atoms/Image';

// Interface
import IFigure from './interface';

const Figure: FC<IFigure> = ({ title, ...rest }: IFigure): ReactElement<IFigure> => {
    return(
        <figure>
            <Image src={rest.src} alt={rest.alt} />
            {title && <figcaption>{title}</figcaption>}
        </figure>
    );
};

export default memo(Figure);