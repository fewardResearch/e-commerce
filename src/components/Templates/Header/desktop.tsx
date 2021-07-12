// React
import React, { FC, memo, ReactElement, useState, useEffect } from 'react';

// Redux
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { toggleMenu } from 'features/menuSlice';

// Next
import useTranslation from 'next-translate/useTranslation'

// Atoms
import Button from 'components/Atoms/Button'
import Typography from 'components/Atoms/Typography'

// Molecules
import Dropdown from 'components/Molecules/Dropdown';

// Organisms
import Logo from 'components/Organisms/Logo'
import Navigation from 'components/Organisms/Navigation'

// Icons
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { BiBasket } from 'react-icons/bi'

const Desktop: FC = (): ReactElement => {

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const [fixed, setFixed] = useState<boolean>(false);
    const cart = useAppSelector((state) => state.cart.value);

    const fixedHeader = () => {
        window.addEventListener('scroll', () => {
            setFixed(window.scrollY > document.getElementById("headerTop")?.offsetHeight);
        });
    };

    useEffect(() => {
        fixedHeader();
    }, []);

    return(
        <header>
            <div className="mb-5" id="headerTop">
                <div className="container mx-auto py-3">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex -mx-5 items-center">
                                <div className="px-5">
                                    <Dropdown type="default" icon relative title="TR" hover list={[
                                        {   
                                            url: "#",
                                            title: "EN"
                                        }
                                    ]} />
                                </div>
                                <div className="px-5">
                                    <Dropdown type="default" icon relative title="TL" hover list={[
                                        {
                                            url: "#",
                                            title: "USD"
                                        }
                                    ]} />
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="flex flex-wrap items-center">
                                <div>
                                    <Button type="button" fontSize="3xl" icon>
                                        <AiOutlineUser />
                                        <Typography type="span" fontSize="xl" className="ml-4">{t("header:myProfile")}</Typography>
                                    </Button>
                                </div>
                                <div className="ml-16 relative">
                                    <Button type="button" fontSize="3xl" icon onClick={() => dispatch(toggleMenu())}>
                                        <BiBasket />
                                        <Typography type="span" fontSize="xl" className="ml-4">{cart.length} {t("common:product")}</Typography>
                                    </Button>
                                </div>
                                <div className="ml-24">
                                    <Button type="button" fontSize="3xl">
                                        <AiOutlineSearch />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${fixed ? "fixed top-0 left-0 w-full bg-white z-50 shadow": ""}`}>
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <div className="w-36">
                            <Logo className="w-full" />
                        </div>
                        <div className="flex-1">
                            <Navigation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default memo(Desktop);