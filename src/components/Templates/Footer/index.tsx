// React
import React, { FC, ReactElement, memo } from 'react';

// HOC
import Placement from 'components/HOC/Placement';

// Components
import Mobile from './mobile'
import Desktop from './desktop';

const Footer: FC = (): ReactElement => {
    return <Placement Desktop={<Desktop />} Mobile={<Mobile />} />;
};

export default memo(Footer);