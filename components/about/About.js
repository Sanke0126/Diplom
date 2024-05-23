import Image from "next/image";
import AboutCard from "./AboutCard";
const About = () => {
  return (
    <section id="about-us" className="bg-white mb-12">
      <h1 className="text-center text-[50px] font-bold mb-[120px]">About us</h1>
      <div>
        <h1 className="text-center text-[35px] font-bold">
          We Invite you to Visit Our Restaurant
        </h1>
        <p className="text-center text-[15px] mt-4 w-[50%] mx-auto text-[#666666] mb-[50px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
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
          What We Do
        </h1>
        <AboutCard/>
      </div>
    </section>
  );
};

export default About;
