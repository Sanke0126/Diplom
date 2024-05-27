import Head from "next/head";
import Cart from "../components/cart-page/Cart";
import axiosBase from "../utils/axios-base";

export default function CartPage({ restoStatus }) {
  const defaultRestoStatus = { isReceivingOrder: false };

  return (
    <>
      <Head>
        <title>Linguine | Cart</title>
        <meta name="description" content="Your cart" />
        <meta
          name="keywords"
          content="restaurant, online order application, working space"
        />
        <link rel="icon" href="/Cake.ico" />
      </Head>
      <Cart restoStatus={restoStatus || defaultRestoStatus} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const resto = await axiosBase.get("/api/resto");
    const restoStatus = resto.data[0] || { isReceivingOrder: false };
    return {
      props: {
        restoStatus,
      },
    };
  } catch (error) {
    console.error("Error fetching resto data:", error);
    return {
      props: {
        restoStatus: { isReceivingOrder: false },
      },
    };
  }
};
