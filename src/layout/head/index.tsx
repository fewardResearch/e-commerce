//React
import React, { ReactElement } from 'react';

// Next
import Head from 'next/head';

// Interface
import IHead from './interface';

const LayoutHead: React.FC<IHead> = ({ title, description, keywords, author, twitter, favicon, children }: IHead): ReactElement<IHead> => {
    return(
        <Head>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="twitter:title" content={twitter} />
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            <title>{title}</title>
            {children}
        </Head>
    );
};

export default LayoutHead;