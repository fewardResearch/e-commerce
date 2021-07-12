// React
import React, { FC, ReactElement, memo } from 'react'

// Atoms
import Image from 'components/Atoms/Image'
import Typography from 'components/Atoms/Typography'

// Molecules
import Countdown from 'components/Molecules/Countdown'
import AddToCart from 'components/Molecules/AddToCart'

// Interface
import IProduct from './interface'

const Product: FC<IProduct> = ({ id, image, slug, title, description, price, oldPrice, className, countdown: { time, day, month, year} }: IProduct): ReactElement<IProduct> => {    
    return(
        <div className="border rounded-xl p-3 relative">
            <a href={`/product/${slug}`} className={`block relative mb-5 ${className ? className : ""}`}>
                <Image src={image} alt={title} className="rounded-xl" />
                <Countdown day={day} month={month} year={year} time={time} className="absolute bottom-0 left-0 w-full z-10" />
            </a>
            <div>
                <Typography type="h3" weight="bold" fontSize="2xl" margin={3}>{title}</Typography>
                <Typography type="p" fontSize="lg" className="h-12 overflow-hidden" margin={3}>{description}</Typography>
                <div className="flex items-center justify-between relative">
                    <div>
                        <Typography type="strong" display="block" fontSize="2xl" textColor="yellow-400">{price} ₺</Typography>
                        <Typography type="del" display="block" fontSize="2xl" textColor="gray-200">{oldPrice} ₺</Typography>
                    </div>
                    <div>
                        <AddToCart id={id} slug={slug} image={image} title={title} description={description} price={price} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Product);