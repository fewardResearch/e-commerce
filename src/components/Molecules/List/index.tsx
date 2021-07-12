// React
import React, { FC, ReactElement, memo } from 'react';

// Atoms
import Typography from 'components/Atoms/Typography';
import Button from 'components/Atoms/Button';

// Interface
import IList from './interface';

const List: FC<IList> = ({
    title,
    className,
    vertical,
    list
}: IList): ReactElement<IList> => {
    return(
        <>
            {title && <Typography type="h2" fontSize="2xl" margin={5}>{title}</Typography>}
            <ul className={`${vertical ? "flex flex-wrap": ""}`}>
                {list.length > 0 && list.map((item, index) => (
                    <li className="block" key={index}>
                        <Button type="link" href={item.url} ySize={2} xSize={3} fontSize="lg" className={`block ${className ? className : ""}`}>{item.title}</Button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default memo(List);