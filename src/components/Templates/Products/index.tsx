// React
import React, { FC, memo, ReactElement, useEffect, useState } from 'react'

// Organisms
import Product from 'components/Organisms/Product'

import IProduct from 'components/Organisms/Product/interface'

// Helpers
import { productsApi } from 'helpers/endpoints'

const Products: FC = (): ReactElement => {
    const [products, setProducts] = useState<IProduct[] | []>([]);

    const getData = () => {
        fetch(productsApi)
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => console.error(error));
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        <div className="md:flex md:flex-wrap lg:-mx-5">
            {products.map((product, index) => (
                <div className="md:w-1/2 xl:w-1/4 px-5 mb-10" key={index}>
                    <Product slug={product.slug} id={product.id} title={product.title} image={product.image} description={product.description} price={product.price} oldPrice={product.oldPrice} countdown={product.countdown} />
                </div>
            ))}
        </div>
    );
};

export default memo(Products);