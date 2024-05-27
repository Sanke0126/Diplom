import { useEffect, useState } from "react";
import Link from "next/link";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import BestSellingItemCard from "./BestSellingItemCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    partialVisibilityGutter: 60,
    items: 3,
  },
  desktopLg: {
    breakpoint: { max: 1536, min: 1280 },
    partialVisibilityGutter: 0,
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    partialVisibilityGutter: 40,
    items: 2,
  },
  tabletLg: {
    breakpoint: { max: 1024, min: 780 },
    partialVisibilityGutter: 80,
    items: 2,
  },
  tablet: {
    breakpoint: { max: 780, min: 640 },
    partialVisibilityGutter: 20,
    items: 2,
  },
  mobileXl: {
    breakpoint: { max: 640, min: 570 },
    partialVisibilityGutter: 200,
    items: 1,
  },
  mobileLg: {
    breakpoint: { max: 570, min: 470 },
    partialVisibilityGutter: 140,
    items: 1,
  },
  mobile: {
    breakpoint: { max: 470, min: 0 },
    partialVisibilityGutter: 70,
    items: 1,
  },
};

const BestSellingItems = ({ bestMeals }) => {
  return (
    <section id="menu" className="bg-white py-12 lg:py-40">
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-6 gap-6 items-center">
        <div className="lg:col-span-2 flex flex-col gap-4 items-start">
          <h2 className="font-bold text-[55px] w-[410px] sm:text-start text-center">Бест селлер</h2>
          <p className="sm:text-justify text-center">
            Лингвини рестораны нэрийн хоол болон үйлчлүүлэгчдийн маань сэтгэлд
            нийцэн, хамгийн их захиалагддаг хоолнуудаас танилцуулж байна.Та амтархан зооглоорой.
          </p>
          <Link href={"/#signature"}>
            <button className="hidden lg:block button bg-yellow text-[18px]">
              Бүх хоол үзэх
            </button>
          </Link>
        </div>
        <div className={`lg:col-span-4 w-full cursor-grab`}>
          <Carousel
            partialVisible={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            customTransition="all 1s"
            transitionDuration={1000}
            containerClass="pb-12"
            arrows={true}
          >
            {bestMeals.map((item, index) => (
              <BestSellingItemCard key={index} item={item} />
            ))}
          </Carousel>
          <Link href={"/#signature"}>
            <button className="lg:hidden block button bg-yellow">
              See all available meals
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellingItems;
