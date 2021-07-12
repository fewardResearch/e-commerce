// React
import React, { ReactElement } from 'react';

// Redux
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { toggleMenu } from 'features/menuSlice';

// Next
import Head from 'layout/head';

// Templates
import Cart from 'components/Templates/Cart'

// Overlay
import Overlay from 'components/HOC/Overlay'

// Interface
import ILayout from './interface';

const Layout: React.FC<ILayout> = ({ Header, Footer, children, ...rest }: ILayout): ReactElement<ILayout> => {
    const menu = useAppSelector((state) => state.menu.value)
    const dispatch = useAppDispatch();

    return(
        <>
            <Head title={rest.title} description={rest.description} keywords={rest.keywords} author={rest.author} twitter={rest.twitter} favicon={rest.favicon} />

            {Header && <Header />}

            <Cart />

            <main>
                {children}
            </main>

            {Footer && <Footer />}

            {menu && <Overlay onClick={() => dispatch(toggleMenu())} />}
        </>
    );
};

export default Layout;