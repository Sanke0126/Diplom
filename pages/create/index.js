import React from "react";
import CreateProduct from "../../components/create/createProduct";

const CreatePage = () => {
  return (
    <div className="flex flex-col gap-4 mt-[50px]">
      <h1 className="text-center">Create a New Product</h1>
      <CreateProduct />
    </div>
  );
};

export default CreatePage;
