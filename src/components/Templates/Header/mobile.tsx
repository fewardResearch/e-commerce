// React
import React, { FC, ReactElement, memo } from 'react';

// Redux
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { toggleMenu } from 'features/menuSlice';

// Atoms
import Button from 'components/Atoms/Button'

// Organisms
import Logo from 'components/Organisms/Logo'
import Navigation from 'components/Organisms/Navigation'

// Icons
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'

const Mobile: FC  = (): ReactElement => {
    const dispatch = useAppDispatch();
    return(
        <>
            <header className="fixed bottom-0 left-0 w-full bg-white z-50 py-2 px-3 shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="p-1">
                            <Button type="button" borderRadius="full" border={1} xSize={2} ySize={2} fontSize="2xl" borderColor="black">
                                <AiOutlineMenu />
                            </Button>
                        </div>
                    </div>
                    <div className="w-24">
                        <Logo className="w-full" />
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center justify-end">
                            <div className="p-1">
                                <Button type="button" borderRadius="full" border={1} xSize={2} ySize={2} fontSize="2xl" borderColor="black">
                                    <AiOutlineSearch />
                                </Button>
                            </div>
                            <div className="p-1">
                                <Button type="button" borderRadius="full" border={1} xSize={2} ySize={2} fontSize="2xl" borderColor="black">
                                    <AiOutlineUser />
                                </Button>
                            </div>
                            <div className="p-1">
                                <Button type="button" borderRadius="full" border={1} xSize={2} ySize={2} fontSize="2xl" borderColor="black" onClick={() => dispatch(toggleMenu())}>
                                    <BiCart />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation />
        </>
    );
};

export default memo(Mobile);