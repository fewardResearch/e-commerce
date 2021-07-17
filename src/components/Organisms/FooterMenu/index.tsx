// React
import React, { FC, ReactElement, memo, useEffect, useState } from 'react';

// Utilities
import { footerMenuApi } from 'utils/endpoints';
import { getData } from 'utils/data';

// Interface
import IFooterMenu from './interface';

// Atoms
import Button from 'components/Atoms/Button';

const FooterMenu: FC = (): ReactElement => {

    const [data, setData] = useState<IFooterMenu[] | []>([]);

    useEffect(() => {
        getData(footerMenuApi, setData);
    }, []);

    return(
        <nav className="footer-menu">
            <ul className="flex flex-wrap text-center">
                {data.map((menu, index) => (
                    <li className="block md:w-1/2 lg:flex-1" key={index} >
                        <div className="mb-10">
                            <Button type="link" href={menu.url} fontSize="4xl" weight="bold">{menu.title}</Button>
                        </div>
                        
                        {menu.children && <ul>
                            {menu.children.map((child, subIndex) => (
                                <li key={subIndex} className="block py-2">
                                    <Button type="link" href={child.url} fontSize="xl">{child.title}</Button>
                                </li>
                            ))}
                        </ul>}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default memo(FooterMenu);