// React
import React, { FC, ReactElement, memo, useEffect, useState } from 'react';

// Atoms
import Placement from 'components/HOC/Placement';

// Components
import Mobile from './mobile';
import Desktop from './desktop';

// Utilities
import { navigationApi } from 'utils/endpoints';
import { getData } from 'utils/fetch';

// Interface
import { IData } from './interface';

const Navigation: FC = (): ReactElement => {  
    const [data, setData] = useState<IData[] | []>([]);

    useEffect(() => {
        getData(navigationApi, setData);
    }, []);
    
    return(
        <Placement Mobile={<Mobile navigation={data} />} Desktop={<Desktop navigation={data} />} />
    );
};

export default memo(Navigation);