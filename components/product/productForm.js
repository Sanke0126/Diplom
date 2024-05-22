import { useState, useEffect } from "react";

const ProductForm = ({ product, onSave }) => {
  const [formData, setFormData] = useState({
    id: product?._id || "",
    category: product?.category || "",
    name: product?.name || "",
    desc: product?.desc || "",
    price: product?.price || "",
    url: product?.url || "",
    bestSeller: product?.bestSeller || false,
    recommended: product?.recommended || false,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        id: product._id,
        category: product.category,
        name: product.name,
        desc: product.desc,
        price: product.price,
        url: product.url,
        bestSeller: product.bestSeller,
        recommended: product.recommended,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      id: "",
      category: "",
      name: "",
      desc: "",
      price: "",
      url: "",
      bestSeller: false,
      recommended: false,
    });
  };

  return (
    <form
      className="shadow-xl py-4 px-8 flex flex-col gap-4 rounded-[300px] items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-light-yellow p-[10px] rounded-[15px]"
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        className="bg-light-yellow p-[10px] rounded-[15px]"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        className="bg-light-yellow p-[10px] rounded-[15px]"
        type="text"
        name="desc"
        value={formData.desc}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        className="bg-light-yellow p-[10px] rounded-[15px]"
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        className="bg-light-yellow p-[10px] rounded-[15px]"
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />

      <div className="flex items-center mb-2 mt-[10px] gap-3 w-[195px]">
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-[16px] font-normal text-gray-900 dark:text-gray-300"
        >
          Best Seller
        </label>
        <input
          id="default-checkbox"
          type="checkbox"
          name="bestSeller"
          checked={formData.bestSeller}
          onChange={handleChange}
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <div className="flex items-center mb-4 gap-3 w-[195px]">
        <label
          htmlFor="recommended-checkbox"
          className="ms-2 text-[16px] font-normal text-gray-900 dark:text-gray-300"
        >
          Recommended
        </label>
        <input
          id="recommended-checkbox"
          type="checkbox"
          name="recommended"
          checked={formData.recommended}
          onChange={handleChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <button className="button bg-yellow w-[200px] mb-[20px]" type="submit">
        Save
      </button>
    </form>
  );
};

export default ProductForm;
