// React
import React, { FC, memo, ReactElement, useEffect, useState } from 'react';

import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Atoms
import Typography from 'components/Atoms/Typography';
import Image from 'components/Atoms/Image';

// Organisms
import Banner from 'components/Organisms/Banner'

// Helpers
import { sliderApi } from 'helpers/endpoints'

// Settings
import settings from './settings'

// Interface
import ISlider from './interface';

const Slider: FC = (): ReactElement => {
    const [data, setData] = useState<ISlider[] | []>([]);

    const getData = () => {
        fetch(sliderApi)
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
        .catch(error => console.error(error));
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        <ReactSlick {...settings}>
            {data.map((item, index) => (
                <div key={index}>
                    {item.bgDesktopImage && item.bgMobileImage ? <div className="relative">
                        <Banner container desktop={item.bgDesktopImage} mobile={item.bgMobileImage} alt={item.title}>
                            <Typography type="h1" textColor="white" fontSize="6xl" weight="bold">{item.title}</Typography>
                        </Banner>
                    </div>: <div style={{
                        backgroundColor: item.bgColor
                    }}>
                        <div className="container mx-auto">
                            <div className="lg:flex lg:justify-center lg:items-center">
                                <div className="lg:w-1/4 lg:text-left lg:p-0 p-5 text-center">
                                    <Typography type="h1" textColor="white" fontSize="6xl" weight="bold" margin={16}>{item.title}</Typography>
                                    <Typography type="p" textColor="white" fontSize="2xl" lineHeight="relaxed">{item.description}</Typography>
                                </div>
                                {item.contentImage && <div className="lg:w-1/2">
                                    <Image alt={item.alt} src={item.contentImage} />
                                </div>}
                            </div>
                        </div>
                    </div>}
                </div>
            ))}
        </ReactSlick>
    );
};

export default memo(Slider);