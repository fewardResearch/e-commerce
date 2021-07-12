// React
import React, { FC, ReactElement, memo } from 'react'

// Interface
import IPicture from './interface'

// Atoms
import Image from 'components/Atoms/Image'

const Picture: FC<IPicture> = ({ desktop, mobile, ...rest }: IPicture): ReactElement => {
    return(
        <picture>
            {desktop && <source media={`(min-width: 1536px)`} srcSet={desktop} />}
            <Image src={mobile ? mobile : rest.src} alt={rest.alt} className={rest.className} />
        </picture>
    );
};

export default memo(Picture);