"use client";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";

import store from "../store/app-state-data/index-store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  
useEffect(() => {
  (async () => {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;
    const locomotiveScroll = new LocomotiveScroll();
  })();
}, []);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
