import Link from "next/link";

import Image from "next/image";
import WavesDown from "./waves-down";

const Home = () => {
  return (
    <>
      <section className="pt-8 bg-light-yellow">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 custom-container">
          <div className="w-full xl:w-[70vh] aspect-square sm:aspect-video lg:aspect-square lg:rounded-tl-[25%] overflow-hidden lg:order-2 lg:place-self-end">
            <Image
              src="/background/dinner-table-with-foods-soft-drinks-restaurant.jpg"
              alt="meet and eat together at Linguine Eatery"
              width={400}
              height={500}
              style={{ width: "auto", height: "auto" }}
              priority={true}
            />
          </div>
          <div className="tracking-tighter py-6 lg:order-1 xl:px-[10vh] 2xl:px-[0vh]">
            <h1 className="text-4xl lg:text-5xl xl:text-[8vh] xl:leading-[100%] font-bold mb-4">
              Амьдралын жинхэнэ амтыг мэдэр.
            </h1>
            <p className="text-[16px] text-[#666666] mt-[20px] mb-[30px] text-justify">
              Шинэхэн бэлтгэсэн амтат хоол, сайхан орчинд зооглон, мартагдашгүй
              туршлагыг амсах боломжийг бүү алдаарай. Уулзаж, амтат хоолыг
              таашааж, гайхалтай мөчүүдийг бидэнтэй хамт өнгөрүүлээрэй.
            </p>
            <div className="flex flex-wrap justify-start items-center gap-x-4 gap-y-2 mt-4 -ml-1">
              <Link href="/#reservation">
                <button className="button bg-yellow ">Ширээ захиалах</button>
              </Link>
              <Link href="/#menu">
                <button className="button bg-black  text-white">
                  Онлайнаар захиалах
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WavesDown />
    </>
  );
};

export default Home;
