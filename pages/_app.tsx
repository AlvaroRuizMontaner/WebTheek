import ErrorBoundary from "@/_componentes/containers/error-boundary/error-boundary.container";
//import Layout from "@/_componentes/containers/layout/layout.container";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import "../styles/global.scss";
import "semantic-ui-css/semantic.min.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/icons/butterfly.png" />
        <script src="/__ENV.js" />
      </Head>
      <header></header>
      <main>
        <ErrorBoundary>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </main>
      <footer></footer>
    </>
  );
}
