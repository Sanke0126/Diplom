import { useState } from "react";
import Image from "next/image";
const CategoryFilter = (props) => {
  const { onChangeCategory } = props;
  const [currFilter, setCurrFilter] = useState("ALL");

  const changeFilterHandler = (filter) => {
    setCurrFilter(filter);
    onChangeCategory(filter);
  };

  const filterCategoryHandler = (e) => {
    setCurrFilter(e.target.value);
    onChangeCategory(e.target.value);
  };

  const filterBtnStyle =
    "py-1 px-3 rounded-full hover:bg-yellow hover:shadow-lg transition duration-300";

  return (
    <div className="flex items-center my-2 sm:gap-0 gap-10 sm:my-4 sm:mt-[50px] mt-[30px]">
      <h3 className="text-[18px] text-center font-semibold">Ангилалаар шүүх</h3>

      {/* //filter for mobile */}
      <select
        className="block sm:hidden bg-yellow py-1 px-3 rounded-full font-semibold text-center appearance-none"
        name="category"
        id="category"
        defaultValue={"ALL"}
        onChange={filterCategoryHandler}
      >
        <option value="ALL">Бүх</option>
        <option value="MAIN DISH">Үндсэн</option>
        <option value="SALAD">Салат</option>
        <option value="MONGOLIAN">Монгол</option>
        <option value="GRILLED">Гриллдсэн</option>
        <option value="HOT DRINK">Халуун уух зүйлс</option>
        <option value="ADDITIONAL">Хачир</option>
        <option value="DESSERT">Дессэрт</option>
        <option value="PIZZA">Пицца</option>
        <option value="ALCOHOL">Алкахол</option>
        <option value="DRINKS">Уух зүйлс</option>
      </select>

      <div className="hidden sm:flex items-center gap-4">
        <button
          onClick={() => changeFilterHandler("ALL")}
          className={`${filterBtnStyle} ${
            currFilter === "ALL"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Бүх
        </button>
        <button
          onClick={() => changeFilterHandler("MAIN DISH")}
          className={`  ${filterBtnStyle} ${
            currFilter === "MAIN DISH"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Үндсэн
        </button>
        <button
          onClick={() => changeFilterHandler("SALAD")}
          className={` ${filterBtnStyle} ${
            currFilter === "SALAD"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Салат
        </button>
        <button
          onClick={() => changeFilterHandler("MONGOLIAN")}
          className={`${filterBtnStyle} ${
            currFilter === "MONGOLIAN"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Монгол
        </button>
        <button
          onClick={() => changeFilterHandler("GRILLED")}
          className={`${filterBtnStyle} ${
            currFilter === "GRILLED"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Гриллдсэн
        </button>
        <button
          onClick={() => changeFilterHandler("HOT DRINK")}
          style={{ whiteSpace: "nowrap", textWrap: "none" }}
          className={`${filterBtnStyle} ${
            currFilter === "HOT DRINK"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          } `}
        >
          Халуун уух зүйл
        </button>
        <button
          onClick={() => changeFilterHandler("ADDITIONAL")}
          className={`${filterBtnStyle} ${
            currFilter === "ADDITIONAL"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Хачир
        </button>
        <button
          onClick={() => changeFilterHandler("DESSERT")}
          className={`${filterBtnStyle} ${
            currFilter === "DESSERT"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Дессэрт
        </button>
        <button
          onClick={() => changeFilterHandler("PIZZA")}
          className={`${filterBtnStyle} ${
            currFilter === "PIZZA"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Пицца
        </button>
        <button
          onClick={() => changeFilterHandler("ALCOHOL")}
          className={`${filterBtnStyle} ${
            currFilter === "ALCOHOL"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Алкахол
        </button>
        <button
          onClick={() => changeFilterHandler("DRINKS")}
          style={{ whiteSpace: "nowrap", textWrap: "none" }}
          className={`${filterBtnStyle} ${
            currFilter === "DRINKS"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Уух зүйл
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
