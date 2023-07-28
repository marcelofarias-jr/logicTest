import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>MDC group logic test</title>
                <meta name='description' content='MDC group logic test' />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>MDC group logic test</h1>
                <div className={styles.grid}>
                    <Link href='/test01' className={styles.card}><h2>Test 1: Manipulating the DOM with JavaScript &rarr;</h2></Link>
                    <Link href='/test02' className={styles.card}><h2>Test 2: Responsive Layout</h2></Link>
                    <Link href='/test03' className={styles.card}><h2>Test 3: Consuming an API</h2></Link>
                    <Link href='/test04' className={styles.card}><h2>Test 4: Form Validation</h2></Link>
                </div>
            </main>
        </div>
    );
}
