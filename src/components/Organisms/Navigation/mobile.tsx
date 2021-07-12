// React
import React, { FC, ReactElement, useState, memo } from 'react';

// Interface
import INavigation from './interface'

// Atoms
import Button from 'components/Atoms/Button'

const Mobile: FC<INavigation> = ({ 
    navigation
}: INavigation): ReactElement<INavigation> => {
    const [menu, toggleMenu] = useState<boolean>(false);

    return(
        <nav className={`fixed top-0 -left-full transition delay-500 duration-500 h-full z-30 w-9/12 bg-white`}>
             <ul>
                {navigation.map((item: { id: number; url: string; title: string; children: []; }, index) => (
                    <li key={index} className={`${item.children ? "relative": ""}`}>
                        <Button type="link" href={item.url} className="block" xSize={5} ySize={2}>{item.title}</Button>
                        {item.children && <ul className="absolute top-0 -left-full">
                            {item.children.map((child: { id: number; url: string; title: string; }, subIndex) => (
                                <li className="block" key={subIndex}>
                                    <Button type="link" href={child.url} className="block">{child.title}</Button>
                                </li>
                            ))}
                        </ul>}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default memo(Mobile);