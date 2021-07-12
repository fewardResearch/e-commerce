// React
import React, { FC, ReactElement, memo, useEffect, useState } from 'react';

// Atoms
import Placement from 'components/HOC/Placement';

// Components
import Mobile from './mobile';
import Desktop from './desktop';

// Helpers
import { navigationApi } from 'helpers/endpoints';

// Interface
import { IData } from './interface';

const Navigation: FC = (): ReactElement => {  
    const [data, setData] = useState<IData[] | []>([]);

    const getData = () => {
        fetch(navigationApi)
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
        <Placement Mobile={<Mobile navigation={data} />} Desktop={<Desktop navigation={data} />} />
    );
};

export default memo(Navigation);