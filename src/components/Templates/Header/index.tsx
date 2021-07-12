// React
import React, { ReactElement, useState, useEffect } from 'react';

// Components
import Mobile from './mobile';
import Desktop from './desktop';

// Atoms
import Placement from 'components/HOC/Placement';

const Header: React.FC = (): ReactElement => {
    return(
        <Placement Mobile={<Mobile/>} Desktop={<Desktop />} />
    );
};

export default Header;