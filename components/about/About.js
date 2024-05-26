import Image from "next/image";
import AboutCard from "./AboutCard";
const About = () => {
  return (
    <section id="about-us" className="bg-white mb-12">
      <h1 className="text-center text-[50px] font-bold mb-[120px]">
        Бидний тухай
      </h1>
      <div>
        <h1 className="text-center text-[35px] font-bold">
          Та бүхнийг манай ресторанаар зочлохыг урьж байна.
        </h1>
        <p className="text-center text-[15px] mt-4 w-[50%] mx-auto text-[#666666] mb-[50px]">
          Манай ресторан бол амтат хоол, гайхалтай үйлчилгээ, сайхан орчныг
          хослуулсан онцгой газар юм. Бид шинэхэн, чанартай орц найрлагыг
          ашиглан төрөл бүрийн хоол бэлтгэдэг бөгөөд таныг ид шидийн амттай
          аялалд урьж байна.
        </p>
      </div>
      <div className="w-full h-[500px]">
        <video
          className="w-[80%] mx-auto h-full object-cover rounded-[20px]"
          autoPlay
          loop
          muted
        >
          <source src="../images/rest.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <h1 className="text-center text-[30px] font-bold mt-[50px]">
        Бид юу хийдэг вэ ?
        </h1>
        <AboutCard />
      </div>
    </section>
  );
};

export default About;
