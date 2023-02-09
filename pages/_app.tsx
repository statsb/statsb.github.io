import { AppProps } from 'next/app'
import './style.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>TEAM CRYPTO WHALE</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}