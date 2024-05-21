import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import LoadingIcon from "../../components/icons/LoadingIcon";

const AdminMenuManagerPage = () => {
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
          <title>Hungray | Manage Menu</title>
          <meta
            name="description"
            content="Menu manager of Hungray landing page, restaurant with online reservation, online delivery order, or in-resto online ordering system"
          />
          <meta
            name="keywords"
            content="restaurant, online order application, working space"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>admin menu manager page</div>;
      </>
    );
  }
};

export default AdminMenuManagerPage;
