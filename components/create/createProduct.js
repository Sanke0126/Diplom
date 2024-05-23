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
//       <select
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
//         type="text"
//         name="name"
//         value={product.name}
//         onChange={handleChange}
//         placeholder="Name"
//         required
//       />
//       <textarea
//         name="desc"
//         value={product.desc}
//         onChange={handleChange}
//         placeholder="Description"
//         required
//       />
//       <input
//         type="number"
//         name="price"
//         value={product.price}
//         onChange={handleChange}
//         placeholder="Price"
//         required
//       />
//       <label>
//         Best Seller:
//         <input
//           type="checkbox"
//           name="bestSeller"
//           checked={product.bestSeller}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Recommended:
//         <input
//           type="checkbox"
//           name="recommended"
//           checked={product.recommended}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="file" name="image" onChange={fileSelectHandle} required />
//       <button type="submit">Create Product</button>
//       {success && <p>Product created successfully!</p>}
//     </form>
//   );
// };

// export default CreateProduct;
