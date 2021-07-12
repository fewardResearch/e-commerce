// React
import React, { ReactElement, memo } from 'react';

// Redux
import { useAppDispatch } from 'app/hooks';
import { addToCart } from 'features/cartSlice';

// Next
import useTranslation from 'next-translate/useTranslation'

// Atoms
import Button from 'components/Atoms/Button';
import Typography from 'components/Atoms/Typography';

// Icons
import { RiShoppingCartLine } from 'react-icons/ri'

// Interface
import IAddToCart from './interface';

const AddToCart:React.FC<IAddToCart> = ({
    icon,
    ...rest
}: IAddToCart): ReactElement<IAddToCart> => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    console.log(t("product:addToCart"));

    return(
        <Button type="button" bgColor="black" textColor="white" fontSize="2xl" xSize={5} ySize={3} onClick={() => dispatch(addToCart({
            id: rest.id, 
            title: rest.title, 
            description: rest.description, 
            price: rest.price, 
            slug: rest.slug, 
            image: rest.image
        }))}>
            <Typography type="span">{t("product:addToCart")}</Typography>
            {icon && <RiShoppingCartLine />}
        </Button>
    );
};

export default memo(AddToCart);