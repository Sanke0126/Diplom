import axiosBase from "../utils/axios-base";
import Head from "next/head";
import About from "../components/about/About";
import BestSellingItems from "../components/menu/best-selling-section/BestSellingItems";
import Home from "../components/home/Home";
import SignatureMenu from "../components/menu/signature-menu/SignatureMenu";
import Testimonial from "../components/testimonial/Testimonial";
import Reservation from "../components/reservation/Reservation";
import CartMobileBtn from "../components/navigation/cart/CartMobileBtn";
import { useSelector } from "react-redux";

export default function HomePage({ menuList }) {
  const cartItems = useSelector((state) => state.cart.items);

  const bagNum = cartItems.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const compare = (a, b) => {
    if (a.category < b.category) {
      return 1;
    }
    if (a.category > b.category) {
      return -1;
    }
    return 0;
  };

  const menuListSorted = menuList.sort(compare);
  const bestMeals = menuListSorted.filter((item) => item.bestSeller === true);

  return (
    <div>
      <Head>
        <title>Linguine | your best resto in town</title>
        <meta
          name="description"
          content="Hungray landing page, restaurant with online reservation, online delivery order, or in-resto online ordering system"
        />
        <meta
          name="keywords"
          content="restaurant, online order application, working space"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {bagNum > 0 && <CartMobileBtn bagNum={bagNum} />}
      <Home />
      <About />
      <BestSellingItems bestMeals={bestMeals} />
      <SignatureMenu menuList={menuListSorted} />
      <Testimonial />
      <Reservation />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const res = await axiosBase.get(`/api/products`);
    return {
      props: {
        menuList: res.data,
      },
    };
  } catch (error) {
    console.error("Error fetching menuList:", error);
    return {
      props: {
        menuList: [],
      },
    };
  }
};
