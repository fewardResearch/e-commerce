// React
import React, { ReactElement } from 'react';

// Next
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation'

// Layout
import Layout from 'layout';

// Atoms
import Typography from 'components/Atoms/Typography'

// Templates
import Header from 'components/Templates/Header';
import Footer from 'components/Templates/Footer';
import Products from 'components/Templates/Products'

const Catalog: NextPage = (): ReactElement => {
    const { t } = useTranslation('common');

    return(
        <Layout title={t('title')} description={t('description')} Header={Header} Footer={Footer}>
            <Typography type="h1" fontSize="4xl" align="center" margin={10}>Catalog Page</Typography>

            <div className="container mx-auto px-5">
                <Products />
            </div>
        </Layout>
    );
};

export default Catalog;