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
    <div className="flex items-center gap-4 my-2 sm:my-4 sm:mt-[50px]">
      <h3 className="text-[18px]">Filter By Category</h3>

      {/* //filter for mobile */}
      <select
        className="block sm:hidden bg-yellow py-1 px-3 rounded-full font-semibold text-center appearance-none"
        name="category"
        id="category"
        defaultValue={"ALL"}
        onChange={filterCategoryHandler}
      >
        <option value="ALL">All</option>
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

      {/* filter for tablet and higher */}
      <div className="hidden sm:flex items-center gap-4">
        <button
          onClick={() => changeFilterHandler("ALL")}
          className={`${filterBtnStyle} ${
            currFilter === "ALL"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          All
        </button>
        <button
          onClick={() => changeFilterHandler("MAIN DISH")}
          className={`  ${filterBtnStyle} ${
            currFilter === "MAIN DISH"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Main
        </button>
        <button
          onClick={() => changeFilterHandler("SALAD")}
          className={` ${filterBtnStyle} ${
            currFilter === "SALAD"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Salad
        </button>
        <button
          onClick={() => changeFilterHandler("MONGOLIAN")}
          className={`${filterBtnStyle} ${
            currFilter === "MONGOLIAN"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Mongolian
        </button>
        <button
          onClick={() => changeFilterHandler("GRILLED")}
          className={`${filterBtnStyle} ${
            currFilter === "GRILLED"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Grilled
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
          Hot Drinks
        </button>
        <button
          onClick={() => changeFilterHandler("ADDITIONAL")}
          className={`${filterBtnStyle} ${
            currFilter === "ADDITIONAL"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Additional
        </button>
        <button
          onClick={() => changeFilterHandler("DESSERT")}
          className={`${filterBtnStyle} ${
            currFilter === "DESSERT"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Dessert
        </button>
        <button
          onClick={() => changeFilterHandler("PIZZA")}
          className={`${filterBtnStyle} ${
            currFilter === "PIZZA"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Pizza
        </button>
        <button
          onClick={() => changeFilterHandler("ALCOHOL")}
          className={`${filterBtnStyle} ${
            currFilter === "ALCOHOL"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Alcohol
        </button>
        <button
          onClick={() => changeFilterHandler("DRINKS")}
          className={`${filterBtnStyle} ${
            currFilter === "DRINKS"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Drinks
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
