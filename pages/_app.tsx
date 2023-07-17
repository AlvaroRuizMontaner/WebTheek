import ErrorBoundary from '@/containers/error-boundary/error-boundary.container';
import Layout from '@/containers/layout/layout.container';
import type { AppProps } from 'next/app';
import Head from "next/head";
import "../styles/global.scss"
 
export default function App({ Component, pageProps }: AppProps):JSX.Element {
  return (
    <>
        <Head>
        <title></title>
        <link rel="icon" href="/icons/favicon-masmovil-alarmas.svg" />
        <script src="/__ENV.js" />
        </Head>
        <header>

        </header>
        <main>
            <ErrorBoundary>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ErrorBoundary>
        </main>
        <footer>

        </footer>
    </>
  )
}