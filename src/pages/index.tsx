// React
import React, { ReactElement } from 'react';

// Next
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

// Layout
import Layout from 'layout';

// Templates
import Header from 'components/Templates/Header';
import Footer from 'components/Templates/Footer';
import Slider from 'components/Templates/Slider';
import Products from 'components/Templates/Products';

const Index: NextPage = (): ReactElement => {
    const { t } = useTranslation();

    return(
        <Layout title={t('common:title')} description={t('common:description')} Header={Header} Footer={Footer}>
            <Slider />
            <div className="container mx-auto mt-24">
                <Products />
            </div>
        </Layout>
    );
};

export default Index;