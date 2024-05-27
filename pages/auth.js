import Head from "next/head";
import Auth from "../components/auth/Auth";

const AuthPage = () => {
  return (
    <>
      <Head>
        <title>Linguine | Authentication</title>
        <meta
          name="description"
          content="Admin dashboard authentication of Linguine landing page, restaurant with online reservation, online delivery order, or in-resto online ordering system"
        />
        <meta
          name="keywords"
          content="restaurant, online order application, working space"
        />
        <link rel="icon" href="/Cake.ico" />
      </Head>
      <Auth />
    </>
  );
};

export default AuthPage;
