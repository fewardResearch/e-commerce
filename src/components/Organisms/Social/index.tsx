// React
import React, { FC, ReactElement, memo } from 'react'

// Interface
import ISocial from './interface';

// Atoms
import Button from 'components/Atoms/Button'

const Social: FC<ISocial> = ({
    list,
    vertical,
    space,
    ...rest
}: ISocial): ReactElement<ISocial> => {
    return(
        <div className={!vertical ? `flex flex-wrap items-center lg:-mx-${space ? space : 0}` : ""}>
            {list.map((item, index) => (
                <div className={`${vertical ? `py-${space ? space : 0}` : `px-${space ? space : 0}`}`} key={index}>
                    <Button type="link" target={rest.target} href={item.url} fontSize={rest.fontSize}>
                        {item.title && item.title}
                        {item.icon && item.icon}
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default memo(Social);