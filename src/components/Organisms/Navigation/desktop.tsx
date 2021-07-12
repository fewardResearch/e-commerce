// React
import React, { FC, ReactElement, useState, memo } from 'react';

// Atoms
import Button from 'components/Atoms/Button'

// Interface
import INavigation from './interface';

const Desktop: FC<INavigation> = ({ 
    navigation
 }: INavigation): ReactElement<INavigation> => {
    return(
        <nav className="navigation">
            <ul className="flex flex-wrap items-center justify-center relative">
                {navigation.map((item: { id: number; url: string; title: string; children: []; }, index) => (
                    <li key={index} 
                        className="block px-5">
                        <Button 
                            type="link" 
                            href={item.url} 
                            className="block" 
                            fontSize="2xl" 
                            ySize={5}>{item.title}</Button>
                            {item.children && <div className={`absolute top-full left-0 w-full bg-white z-10 hidden`}>
                                <ul className="flex flex-wrap">
                                    {item.children.map((child: { id: number; url: string; title: string; }, subIndex) => (
                                        <li className="w-1/4 px-10 block" key={subIndex}>
                                            <Button type="link" href={child.url} className="block" fontSize="xl" xSize={3}>{child.title}</Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default memo(Desktop);