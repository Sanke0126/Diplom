import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import LoadingIcon from "../../components/icons/LoadingIcon";
import ProductForm from "../../components/product/productForm";
import ProductList from "../../components/product/productList";

const AdminMenuManagerPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth");
    } else if (status === "authenticated") {
      fetchProducts();
    }
  }, [session, router, status]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch("/api/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      setError(error);
    }
  };

  const handleSave = async (product) => {
    try {
      const method = product.id ? "PUT" : "POST";
      const response = await fetch("/api/products", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (method === "POST") {
        setProducts([...products, data]);
      } else {
        setProducts(products.map((p) => (p._id === data._id ? data : p)));
      }
      setCurrentProduct(null);
    } catch (error) {
      setError(error);
    }
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
  };

  if (status === "unauthenticated") {
    return (
      <div className="h-[70vh] w-full grid place-items-center">
        <h2 className="text-3xl text-stone-300 font-bold">Not authorized</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full h-[50vh] grid place-items-center">
        <div className="animate-spin">
          <LoadingIcon size="4rem" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Linguine | Manage Menu</title>
        <meta
          name="description"
          content="Menu manager of Linguine landing page, restaurant with online reservation, online delivery order, or in-resto online ordering system"
        />
        <meta
          name="keywords"
          content="restaurant, online order application, working space"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="mt-[20px] text-center text-[40px] font-semibold">
          Menu Manage
        </h1>
        {error && <p className="error">{error.message}</p>}
        <div className="flex flex-col gap-6">
          <ProductForm product={currentProduct} onSave={handleSave} />
          <ProductList
            products={products}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
};

export default AdminMenuManagerPage;
