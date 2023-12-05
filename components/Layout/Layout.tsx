import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import nprogress from "nprogress";
import Router from "next/router";
import { HeadTags } from "./HeadTags";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  useEffect(() => {
    const handleRouteStart = () => {
      nprogress.start();
    };
    const handleRouteDone = () => {
      nprogress.done();
    };

    Router.events.on("routeChangeStart", () => handleRouteStart());
    Router.events.on("routeChangeComplete", () => handleRouteDone());
    Router.events.on("routeChangeError", () => handleRouteDone());

    return () => {
      // Limpiar eventos cuando el componente se desmonta
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <>
      <HeadTags />
      <Navbar />

      <Container text style={{ paddingTop: "1rem" }}>
        {children}
      </Container>
    </>
  );
};

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default Layout;
