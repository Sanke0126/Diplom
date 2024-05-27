import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    partialVisibilityGutter: 100,
    items: 2,
  },
  desktopLg: {
    breakpoint: { max: 1536, min: 1280 },
    partialVisibilityGutter: 20,
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    partialVisibilityGutter: 260,
    items: 1,
  },
  tabletLg: {
    breakpoint: { max: 1024, min: 780 },
    partialVisibilityGutter: 350,
    items: 1,
  },
  tablet: {
    breakpoint: { max: 780, min: 640 },
    partialVisibilityGutter: 190,
    items: 1,
  },
  mobileXl: {
    breakpoint: { max: 640, min: 570 },
    partialVisibilityGutter: 150,
    items: 1,
  },
  mobileLg: {
    breakpoint: { max: 570, min: 470 },
    partialVisibilityGutter: 40,
    items: 1,
  },
  mobile: {
    breakpoint: { max: 470, min: 0 },
    partialVisibilityGutter: 0,
    items: 1,
  },
};

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await axios.get("/api/feedback");
        setTestimonialData(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonial data:", error);
      }
    };

    fetchTestimonialData();
  }, []);

  return (
    <section id="feedback" className="bg-white py-6 lg:py-24">
      <div className="custom-container sm:flex flex-col lg:grid lg:grid-cols-6 gap-6 items-center">
        <div className="lg:col-span-2 flex flex-col gap-4 items-start">
          <h2 className="font-bold text-[45px] w-[95%] leading-[120%] sm:leading-[180%]">
            Санал хүсэлтүүд
          </h2>
          <p className="text-justify mb-[60px]">
            Таны санал бидэнд үргэлж шинэ санаа, урам зориг өгдөг бөгөөд бидний
            үйлчилгээг сайжруулах үнэтэй сургаал болдог. Таны тусламжтайгаар бид
            илүү сайжирч, танд илүү таатай орчин, амтат хоол, сэтгэл ханамжтай
            үйлчилгээг хүргэх болно. Баярлалаа!😘
          </p>
        </div>
        <div className="lg:col-span-4">
          <Carousel
            partialVisible={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 0.3s"
            transitionDuration={500}
            containerClass="pb-12"
            arrows={false}
          >
            {testimonialData.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
