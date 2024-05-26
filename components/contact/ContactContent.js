import CallUs from "./CallUs";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FaceBookIcon from "../icons/FacebookIcon";

const ContactContent = () => {
  return (
    <div className="custom-container flex flex-col gap-6 w-[300px]">
      <div>
        <h2 className="font-bold text-4xl w-[80%] lg:w-full mb-[16px]">
          Бидэнтэй холбогдох
        </h2>
        <p className="text-sm">
          Хэрэв та удахгүй болох үйл явдлынхаа талаар ярилцахыг хүсвэл, хүссэн
          үедээ бидэнтэй холбоо барина уу.
        </p>
      </div>
      <div>
        <h3 className="font-semibold">Улаанбаатар, Монгол</h3>
        <h5>Чингэлтэй дүүрэг, Индра кибер институт</h5>
      </div>
      <div className="flex flex-col gap-4">
        {["+976 75555555", "+976 90840126"].map((num, index) => (
          <CallUs key={index} phoneNumber={num} />
        ))}
      </div>
      <div>
        <h3 className="uppercase font-semibold mb-4 text-xl tracking-wide">
          Сошиал хаяг
        </h3>
        <div className="flex gap-4">
          <TwitterIcon
            size="1.5rem"
            className="hover:text-yellow transition duration-300 cursor-pointer"
          />
          <InstagramIcon
            size="1.5rem"
            className="hover:text-yellow transition duration-300 cursor-pointer"
          />
          <FaceBookIcon
            size="1.5rem"
            className="hover:text-yellow transition duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
