// React
import React, { ReactElement, memo } from 'react';

// Next
import useTranslation from 'next-translate/useTranslation'

// Redux
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { deleteFromCart } from 'features/cartSlice';
import { toggleMenu } from 'features/menuSlice';

// Image
import Button from 'components/Atoms/Button'
import Image from 'components/Atoms/Image'
import Typography from 'components/Atoms/Typography'

// Inteface
import ICartItem from './interface'

// Icons
import { GrClose } from 'react-icons/gr'

// Utilities
import { sumValues } from 'utils/calc';

const CartItem:React.FC<ICartItem> = ({
    id,
    slug,
    description,
    image,
    price,
    title
}: ICartItem): ReactElement<ICartItem> => {
    const dispatch = useAppDispatch();

    return(
        <div className="flex border-b pb-5 mb-5">
            <div className="w-1/4">
                <a href={`/product/${slug}`} className="block">
                    <Image src={image} alt={title} className="max-w-full block mx-auto" />
                </a>
            </div>
            <div className="flex-1 pl-5">
                <div className="flex items-center justify-between">
                    <div>
                        <Typography type="h3" weight="bold">{title}</Typography>
                    </div>
                    <div>
                        <Button bgColor="gray-100" xSize={3} ySize={2} onClick={() => dispatch(deleteFromCart(id))}><GrClose /></Button>
                    </div>
                </div>
                <Typography type="p" className="h-12 overflow-hidden">{description}</Typography>
                <Typography type="strong">{price} ₺</Typography>
            </div>
        </div>
    );
};

const CartHeader:React.FC = (): ReactElement => {
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    return(
        <header className="flex items-center justify-between border-b px-5 py-3">
            <div>
                <Typography type="h2" fontSize="3xl" weight="bold" margin={3}>{t("cart:cart")}</Typography>
            </div>
            <div>
                <Button type="button" fontSize="2xl" onClick={() => dispatch(toggleMenu())}><GrClose /></Button>
            </div>
        </header>
    );
};

const CartFooter:React.FC = (): ReactElement => {
    const cart = useAppSelector((state) => state.cart.value);

    const { t } = useTranslation();
    
    return(
        <footer className="border-t px-5 py-3">
            <div className="flex items-center justify-between mb-3">
                <div>
                    <Typography type="h2" fontSize="3xl" weight="bold" margin={3}>{t("cart:total")}:</Typography>
                </div>
                <div>
                    <Typography type="p" fontSize="3xl" weight="bold" margin={3}>{sumValues(cart.map(item => item.price))} ₺</Typography>
                </div>
            </div>
            <Button type="button" uppercase bgColor="yellow-400" weight="bold" fontSize="lg" borderRadius="lg" fullWidth={true} ySize={2} className="mb-4">{t("cart:checkout")}</Button>
            <Button type="button" uppercase border={1} weight="bold" borderColor="black" fontSize="lg" borderRadius="lg" fullWidth={true} ySize={2}>{t("cart:cart")}</Button>
        </footer>
    );
}

const Cart:React.FC = (): ReactElement => {
    const cart = useAppSelector((state) => state.cart.value);
    const menu = useAppSelector((state) => state.menu.value);

    const { t } = useTranslation();
    
    return(
        <section className={`flex flex-col fixed pb-20 lg:pb-0 top-0 ${menu ? "right-0" : "-right-full"} bg-white w-4/5 lg:w-1/6 z-20 shadow h-full`}>
            <CartHeader /> 
            <main className="p-5 flex-1 overflow-y-auto">
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((product, index) => (
                            <li className="flex flex-wrap" key={index}>
                                <CartItem id={product.id} slug={product.slug} description={product.description} image={product.image} price={product.price} title={product.title} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Typography type="h2" fontSize="xl">{t("cart:noProduct")}</Typography>
                )}
            </main>
            <CartFooter />
        </section>
    );
};

export default memo(Cart);