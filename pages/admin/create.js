// import React, { useState, useEffect } from "react";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import axios from "axios";
// import app from "../../utils/fire-base";

// const CreateProduct = ({ selectedCategory }) => {
//   const [product, setProduct] = useState({
//     category: "",
//     name: "",
//     desc: "",
//     price: "",
//     url: "",
//     bestSeller: false,
//     recommended: false,
//   });
//   const [selectFile, setSelectFile] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(null);

//   // Set the selected category on mount if it is not "ALL"
//   useEffect(() => {
//     if (selectedCategory && selectedCategory !== "ALL") {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         category: selectedCategory,
//       }));
//     }
//   }, [selectedCategory]);

//   const fileSelectHandle = (e) => {
//     setSelectFile(e.target.files[0]);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setProduct({
//       ...product,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   useEffect(() => {
//     if (selectFile && product.name) {
//       const uploadFile = async () => {
//         const storage = getStorage(app);
//         const storageRef = ref(storage, product.name);
//         const uploadTask = uploadBytesResumable(storageRef, selectFile);

//         uploadTask.on(
//           "state_changed",
//           (snapshot) => {
//             const progress =
//               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log(`Upload is ${progress}% done`);
//           },
//           (error) => {
//             console.error("Upload failed", error);
//             setError("Upload failed. Please try again.");
//           },
//           async () => {
//             const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//             setProduct((prevProduct) => ({
//               ...prevProduct,
//               url: downloadURL,
//             }));
//           }
//         );
//       };

//       uploadFile();
//     }
//   }, [selectFile, product.name]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!product.url) {
//       setError("Image is still uploading. Please wait.");
//       return;
//     }
//     if (!product.category || product.category === "ALL") {
//       setError("Please select a valid category.");
//       return;
//     }
//     console.log(product);
//     try {
//       const response = await axios.post("/api/products", product);
//       setSuccess(true);
//       console.log(response.data);
//     } catch (error) {
//       console.error("There was an error creating the product!", error);
//       setError("There was an error creating the product. Please try again.");
//       setSuccess(false);
//     }
//   };

//   return (
//     <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
//       {error && <p className="text-red-500">{error}</p>}
//       <h1 className="font-bold text-[25px] mt-[15px]">Create a New Product</h1>
//       <select
//         className="w-[200px] rounded-[10px] border-yellow border-2"
//         name="category"
//         value={product.category}
//         onChange={handleChange}
//         required
//       >
//         <option value="" disabled>
//           Select category
//         </option>
//         <option value="MAIN DISH">Main Dish</option>
//         <option value="SALAD">Salad</option>
//         <option value="SOUP">Ramen</option>
//         <option value="MONGOLIAN">Mongolian food</option>
//         <option value="GRILLED">Grilled food</option>
//         <option value="HOT DRINK">Hot drink</option>
//         <option value="ADDITIONAL">Additional side dish</option>
//         <option value="DESSERT">Dessert</option>
//         <option value="PIZZA">Pizza</option>
//         <option value="ALCOHOL">Alcohol</option>
//         <option value="WINE">Wine</option>
//         <option value="DRINKS">Drinks</option>
//       </select>
//       <input
//         className="w-[250px] rounded-[10px] border-yellow border-2"
//         type="text"
//         name="name"
//         value={product.name}
//         onChange={handleChange}
//         placeholder="Name"
//         required
//       />
//       <textarea
//         className="w-[250px] rounded-[10px] border-yellow border-2"
//         name="desc"
//         value={product.desc}
//         onChange={handleChange}
//         placeholder="Description"
//         required
//       />
//       <input
//         className="w-[250px] rounded-[10px] border-yellow border-2"
//         type="number"
//         name="price"
//         value={product.price}
//         onChange={handleChange}
//         placeholder="Price"
//         required
//       />
//       <label className="flex items-center gap-[10px] justify-start w-[250px]">
//         Best Seller:
//         <input
//           type="checkbox"
//           name="bestSeller"
//           checked={product.bestSeller}
//           onChange={handleChange}
//         />
//       </label>
//       <label className="flex items-center gap-[10px] justify-start w-[250px]">
//         Recommended:
//         <input
//           type="checkbox"
//           name="recommended"
//           checked={product.recommended}
//           onChange={handleChange}
//         />
//       </label>
//       <input
//         className="w-[250px]"
//         type="file"
//         name="image"
//         onChange={fileSelectHandle}
//         required
//       />
//       <button
//         className="w-[200px] h-[40px] bg-yellow rounded-[10px]"
//         type="submit"
//       >
//         Create Product
//       </button>
//       {success && <p>Product created successfully!</p>}
//     </form>
//   );
// };

// export default CreateProduct;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import app from "../../utils/fire-base";
import LoadingIcon from "../../components/icons/LoadingIcon"; // Ensure you have a LoadingIcon component

const CreateProduct = ({ selectedCategory }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [product, setProduct] = useState({
    category: "",
    name: "",
    desc: "",
    price: "",
    url: "",
    bestSeller: false,
    recommended: false,
  });
  const [selectFile, setSelectFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth");
    }
  }, [status, router]);

  // Set the selected category on mount if it is not "ALL"
  useEffect(() => {
    if (selectedCategory && selectedCategory !== "ALL") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        category: selectedCategory,
      }));
    }
  }, [selectedCategory]);

  const fileSelectHandle = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    if (selectFile && product.name) {
      const uploadFile = async () => {
        const storage = getStorage(app);
        const storageRef = ref(storage, product.name);
        const uploadTask = uploadBytesResumable(storageRef, selectFile);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error("Upload failed", error);
            setError("Upload failed. Please try again.");
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setProduct((prevProduct) => ({
              ...prevProduct,
              url: downloadURL,
            }));
          }
        );
      };

      uploadFile();
    }
  }, [selectFile, product.name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.url) {
      setError("Image is still uploading. Please wait.");
      return;
    }
    if (!product.category || product.category === "ALL") {
      setError("Please select a valid category.");
      return;
    }
    console.log(product);
    try {
      const response = await axios.post("/api/products", product);
      setSuccess(true);
      console.log(response.data);
    } catch (error) {
      console.error("There was an error creating the product!", error);
      setError("There was an error creating the product. Please try again.");
      setSuccess(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="w-full h-[50vh] grid place-items-center">
        <div className="animate-spin">
          <LoadingIcon size="4rem" />
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="h-[70vh] w-full grid place-items-center">
        <h2 className="text-3xl text-stone-300 font-bold">Not authorized</h2>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <h1 className="font-bold text-[25px] mt-[15px]">Create a New Product</h1>
      <select
        className="w-[200px] rounded-[10px] border-yellow border-2"
        name="category"
        value={product.category}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select category
        </option>
        <option value="MAIN DISH">Main Dish</option>
        <option value="SALAD">Salad</option>
        <option value="SOUP">Ramen</option>
        <option value="MONGOLIAN">Mongolian food</option>
        <option value="GRILLED">Grilled food</option>
        <option value="HOT DRINK">Hot drink</option>
        <option value="ADDITIONAL">Additional side dish</option>
        <option value="DESSERT">Dessert</option>
        <option value="PIZZA">Pizza</option>
        <option value="ALCOHOL">Alcohol</option>
        <option value="WINE">Wine</option>
        <option value="DRINKS">Drinks</option>
      </select>
      <input
        className="w-[250px] rounded-[10px] border-yellow border-2"
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <textarea
        className="w-[250px] rounded-[10px] border-yellow border-2"
        name="desc"
        value={product.desc}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        className="w-[250px] rounded-[10px] border-yellow border-2"
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <label className="flex items-center gap-[10px] justify-start w-[250px]">
        Best Seller:
        <input
          type="checkbox"
          name="bestSeller"
          checked={product.bestSeller}
          onChange={handleChange}
        />
      </label>
      <label className="flex items-center gap-[10px] justify-start w-[250px]">
        Recommended:
        <input
          type="checkbox"
          name="recommended"
          checked={product.recommended}
          onChange={handleChange}
        />
      </label>
      <input
        className="w-[250px]"
        type="file"
        name="image"
        onChange={fileSelectHandle}
        required
      />
      <button
        className="w-[200px] h-[40px] bg-yellow rounded-[10px]"
        type="submit"
      >
        Create Product
      </button>
      {success && <p>Product created successfully!</p>}
    </form>
  );
};

export default CreateProduct;
