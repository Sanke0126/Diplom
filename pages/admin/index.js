import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Head from "next/head";

import Admin from "../../components/admin/Admin";
import LoadingIcon from "../../components/icons/LoadingIcon";
import axiosBase from "../../utils/axios-base";

const AdminPage = ({ orderList, restoStatus }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth");
    }
  }, [session, router, status]);

  if (status === "unauthenticated") {
    return (
      <div className="h-[70vh] w-full grid place-items-center">
        <h2 className="text-3xl text-stone-300 font-bold">not authorize</h2>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="w-full h-[50vh] grid place-items-center">
        <div className="animate-spin">
          <LoadingIcon size="4rem" />
        </div>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <Head>
          <title>Hungray | Admin Dashboard</title>
          <meta
            name="description"
            content="Admin dashboard of Hungray landing page, restaurant with online reservation, online delivery order, or in-resto online ordering system"
          />
          <meta
            name="keywords"
            content="restaurant, online order application, working space"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Admin orderList={orderList} restoStatus={restoStatus} />;
      </>
    );
  }
};

export default AdminPage;

export const getServerSideProps = async () => {
  try {
    const ordersPromise = axiosBase.get(`api/orders`);
    const restoPromise = axiosBase.get("api/resto");
    console.log(restoPromise);
    const [ordersResponse, restoResponse] = await Promise.all([
      ordersPromise,
      restoPromise,
    ]);
    const restoStatus =
      restoResponse.data.length > 0 ? restoResponse.data[0] : null;
    console.log(restoStatus);
    return {
      props: {
        orderList: ordersResponse.data,
        restoStatus: restoStatus,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        orderList: [],
        restoStatus: null,
      },
    };
  }
};
