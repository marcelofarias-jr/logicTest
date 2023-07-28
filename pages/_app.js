import React from 'react';

import '../styles/globals.css';
import '../pages/test02/test2.css';
import '../pages/test04/test4.css';
import '../components/Header/header.css';
import '../components/Layout/layout.css';
import Layout from '../components/layout';
function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
