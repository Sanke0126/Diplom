import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CategoryFilter from "./CategoryFilter";
import WaveWrap from "../../ui/WaveWrap";
import MenuGroup from "./menu-group/MenuGroup";

const SignatureMenu = ({ menuList }) => {
  const [category, setCategory] = useState("ALL");
  const [menuItems, setMenuItems] = useState([...menuList]);
  const router = useRouter();

  useEffect(() => {
    console.log("Category updated:", category);
    if (category === "ALL") {
      setMenuItems(menuList);
    } else {
      const filteredItems = menuList.filter(
        (item) => item.category === category
      );
      console.log("Filtered items:", filteredItems);
      setMenuItems(filteredItems);
    }

    if (category !== "ALL") {
      router.replace("/#signature");
    }
  }, [category, menuList]);

  const changeCategoryHandler = (val) => {
    setCategory(val);
  };

  return (
    <section id="signature">
      <WaveWrap>
        <div className="bg-light-yellow">
          <div className="custom-container sticky top-16 bg-light-yellow z-20 pb-1 sm:py-4">
            <h2 className="font-bold text-4xl w-full">Our Signature Menu</h2>
            <CategoryFilter onChangeCategory={changeCategoryHandler} />
          </div>
          <div className="custom-container">
            <MenuGroup items={menuItems} />
          </div>
        </div>
      </WaveWrap>
    </section>
  );
};

export default SignatureMenu;
