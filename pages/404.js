import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Linguine | Page not found</title>
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
      <div className="bg-white h-[70vh] grid place-items-center">
        <h2 className="text-3xl font-bold text-stone-500 tracking-wider">
          Linguine | 404 page not found
        </h2>
      </div>
    </>
  );
}
