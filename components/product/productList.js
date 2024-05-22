import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[100px] p-6 w-full mx-auto max-w-8xl ml-[40px]">
      {products.map((product) => (
        <div key={product._id} className="product-item w-full gap-[15px] flex flex-col">
          <h3 className="text-[20px] font-bold gap-2 w-full flex items-center">
            Name:
            <span className="font-semibold text-[17px] capitalize mt-[2px]">
              {product.name}
            </span>
          </h3>
          <p className="text-[20px] font-bold gap-2 w-full flex items-center">
            Category:
            <span className="font-semibold text-[17px] capitalize mt-[2px]">
              {product.category}
            </span>
          </p>
          <p className="text-[20px] font-bold gap-2 w-full flex items-center">
            Description:
            <span className="font-semibold text-[17px] capitalize mt-[2px]">{product.desc}</span>
          </p>
          <p className="text-[20px] font-bold gap-2 w-full flex items-center">
            Price:
            <span className="font-semibold text-[17px] capitalize mt-[2px]">{product.price}MNT</span>
          </p>
          <div className="flex gap-[155px] text-[25px] ">
            <FaEdit onClick={() => onEdit(product)} />
            <MdDeleteForever onClick={() => onDelete(product._id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
