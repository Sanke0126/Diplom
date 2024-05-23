import Image from "next/image";

import MenuButton from "../MenuButton";

import { useSelector } from "react-redux";

const BestSellingItemCard = ({ item }) => {
  const formatedPrice = `MNT​​​​​​​​​​​ ${item.price.toLocaleString("id-ID")}₮`;

  const cartItems = useSelector((state) => state.cart.items);
  const existingItemIndex = cartItems.findIndex(
    (meals) => meals._id === item._id
  );
  const isExist = cartItems[existingItemIndex];

  return (
    <div
      className={`w-[250px] rounded-xl overflow-hidden border-2 border-stone-200 shadow-xl cursor-grab`}
    >
      <Image
        draggable={false}
        src={item.url}
        alt={`image of ${item.title}`}
        width={250}
        height={250}
      />
      <div className="p-4 h-[160px]">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p>{item.desc}</p>
        <div className="mt-4 flex justify-between items-start">
          <p className="font-semibold mt-[5px]">{formatedPrice}</p>
          <MenuButton
            mealName={item.name}
            price={item.price}
            _id={item._id}
            isExist={isExist}
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellingItemCard;
