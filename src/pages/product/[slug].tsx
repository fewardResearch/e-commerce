// React
import React, { ReactElement } from 'react';

// Next
import { NextPage, GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation'

// Layout
import Layout from 'layout'

// Atoms
import Typography from 'components/Atoms/Typography'
import Button from 'components/Atoms/Button'

// Molecules
import Countdown from 'components/Molecules/Countdown';
import Picture from 'components/Molecules/Picture'
import AddToCart from 'components/Molecules/AddToCart';

// Templates
import Header from 'components/Templates/Header';
import Footer from 'components/Templates/Footer';

// Interface
import IProduct from 'components/Organisms/Product/interface'

// Utilities
import { host, productsApi } from 'utils/endpoints'

type Props = {
    product: IProduct
}

const Product:NextPage<Props> = ({ product }: Props): ReactElement<Props> => {
    const { t } = useTranslation();
    
    return(
        <Layout title={t('common:title')} description={t('common:description')} Header={Header} Footer={Footer}>
            <div className="container mx-auto">
                <div className="lg:flex lg:-mx-5 lg:px-0 px-5">
                    <div className="lg:px-5 lg:mb-0 lg:w-1/2 mb-5">
                        <Picture src={product.image} alt={product.title} />
                    </div>

                    <div className="lg:px-5 lg:flex-1">
                        <Typography type="h1" fontSize="6xl" margin={5}>{product.title}</Typography>
                        <Typography type="p" fontSize="2xl" margin={10}>{product.description}</Typography>
                        <div className="mb-10">
                            <Countdown day={product.countdown.day} month={product.countdown.month} year={product.countdown.year} time={product.countdown.time} />
                        </div>
                        <div className="lg:flex lg:items-center">
                            <div className="mb-5 lg:mb-0 lg:mr-5">
                                <div className="flex items-center">
                                    {product.oldPrice && <div className="mr-5">
                                        <Typography type="del" fontSize="3xl">{product.oldPrice} ₺</Typography>
                                    </div>}
                                    <div>
                                        <Typography type="strong" fontSize="3xl">{product.price} ₺</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <AddToCart id={product.id} title={product.title} description={product.description} image={product.image} price={product.price} slug={product.slug} countdown={product.countdown} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const { slug } = context.query;
    
    const data = await fetch(host + productsApi).then(response => response.json());

    return {
        props: {
            product: data.filter(item => item.slug == slug)[0]
        }
    }
}

export default Product;