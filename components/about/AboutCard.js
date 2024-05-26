import Image from "next/image";
const AboutCard = () => {
  return (
    <section className="sm:flex sm:flex-row flex flex-col items-center gap-[20px] justify-evenly w-full mt-[50px]">
      <div
        className="w-[260px] h-[280px] bg-[#2222221D] rounded-[10px] pt-[25px] p-[5px] cursor-pointer hover:shadow-yellow hover:scale-105 hover:border-2 hover:border-yellow hover:bg-[#fff]"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <div className="w-[95px] h-[95px] bg-yellow rounded-[100%] mx-auto pt-[15px]">
          <Image
            className="mx-auto"
            src={"/images/vegetable.png"}
            alt={"vegetable"}
            width={60}
            height={60}
          />
        </div>
        <span className="text-center text-[22px] font-bold leading-[120%]">
          <p className="mt-[20px]">Шинэхэн</p>
          <p className="mb-[10px]">Бүтээгдэхүүн</p>
        </span>
        <span className="text-center text-[14px] text-[#666666]">
          <p className="mt-[5px]">
            Lorem Ipsum is simply dummy text of the printing and
          </p>
        </span>
      </div>
      <div
        className="w-[260px] h-[280px] bg-[#2222221D] rounded-[10px] pt-[25px] p-[5px] cursor-pointer hover:shadow-yellow hover:scale-105 hover:border-2 hover:border-yellow hover:bg-[#fff]"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <div className="w-[95px] h-[95px] bg-yellow rounded-[100%] mx-auto pt-[15px]">
          <Image
            className="mx-auto"
            src={"/images/chef-hat.png"}
            alt={"vegetable"}
            width={60}
            height={60}
          />
        </div>
        <span className="text-center text-[22px] font-bold leading-[120%]">
          <p className="mt-[20px]">Мэргэжлийн</p>
          <p className="mb-[10px]">Тогооч</p>
        </span>
        <span className="text-center text-[14px] text-[#666666]">
          <p className="mt-[5px]">
            Lorem Ipsum is simply dummy text of the printing and
          </p>
        </span>
      </div>
      <div
        className="w-[260px] h-[280px] bg-[#2222221D] rounded-[10px] pt-[25px] p-[5px] cursor-pointer hover:shadow-yellow hover:scale-105 hover:border-2 hover:border-yellow hover:bg-[#fff]"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <div className="w-[95px] h-[95px] bg-yellow rounded-[100%] mx-auto pt-[15px]">
          <Image
            className="mx-auto"
            src={"/images/cocktail.png"}
            alt={"vegetable"}
            width={60}
            height={60}
          />
        </div>
        <span className="text-center text-[22px] font-bold leading-[120%]">
          <p className="mt-[20px]">Шилдэг</p>
          <p className="mb-[10px]">Үйлчилгээ</p>
        </span>
        <span className="text-center text-[14px] text-[#666666]">
          <p className="mt-[5px]">
            Lorem Ipsum is simply dummy text of the printing and
          </p>
        </span>
      </div>
      <div
        className="w-[260px] h-[280px] bg-[#2222221D] rounded-[10px] pt-[25px] p-[5px] cursor-pointer hover:shadow-yellow hover:scale-105 hover:border-2 hover:border-yellow hover:bg-[#fff]"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <div className="w-[95px] h-[95px] bg-yellow rounded-[100%] mx-auto pt-[15px]">
          <Image
            className="mx-auto"
            src={"/images/cuisine.png"}
            alt={"vegetable"}
            width={60}
            height={60}
          />
        </div>
        <span className="text-center text-[22px] font-bold leading-[120%]">
          <p className="mt-[20px]">Түргэн</p>
          <p className="mb-[10px]">Шуурхай</p>
        </span>
        <span className="text-center text-[14px] text-[#666666]">
          <p className="mt-[5px]">
            Lorem Ipsum is simply dummy text of the printing and
          </p>
        </span>
      </div>
    </section>
  );
};
export default AboutCard;
