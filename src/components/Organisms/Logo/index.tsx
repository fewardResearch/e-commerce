// React
import React, { FC, ReactElement, memo } from 'react';

// Atoms
import Button from 'components/Atoms/Button';
import Image from 'components/Atoms/Image';

// Interface
import ILogo from './interface'

const Logo: FC<ILogo> = ({ className }: ILogo): ReactElement<ILogo> => {
    return(
        <Button type="link" href="/" className="block">
            <Image src="/logo.svg" alt="Next" className={className} />
        </Button>
    );
};

export default memo(Logo);