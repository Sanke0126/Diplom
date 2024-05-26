import { useState } from "react";
import FillStar from "../icons/FillStarIcon";
import EmptyStarIcon from "../icons/EmptyStarIcon";

const ContactForm = () => {
  const [stars, setStars] = useState(0);
  const [starHover, setStarHover] = useState(0);

  return (
    <div className="shadow-xl py-4 px-8 col-span-2 w-full">
      <h2 className="font-bold text-4xl mb-6">Санал хүсэлтээ илгээнэ үү!</h2>
      <form>
        <div className="control-group">
          <label htmlFor="name">Таны нэр</label>
          <input type="text" name="name" id="name" />
        </div>
        <h3 className="mb-2">Лингвини рестораныг та хэрхэн үнэлэх вэ?</h3>
        <div
          onMouseLeave={() => setStarHover(0)}
          className="flex text-yellow mb-4 w-min"
        >
          <label htmlFor="one" onMouseEnter={() => setStarHover(1)}>
            {stars >= 1 || starHover >= 1 ? (
              <FillStar size="2rem" />
            ) : (
              <EmptyStarIcon size="2rem" />
            )}
          </label>
          <input
            type="checkbox"
            name="one"
            id="one"
            className="invisible"
            onChange={() => setStars(1)}
          />
          <label htmlFor="two" onMouseEnter={() => setStarHover(2)}>
            {stars >= 2 || starHover >= 2 ? (
              <FillStar size="2rem" />
            ) : (
              <EmptyStarIcon size="2rem" />
            )}
          </label>
          <input
            type="checkbox"
            name="two"
            id="two"
            className="invisible"
            onChange={() => setStars(2)}
          />
          <label htmlFor="three" onMouseEnter={() => setStarHover(3)}>
            {stars >= 3 || starHover >= 3 ? (
              <FillStar size="2rem" />
            ) : (
              <EmptyStarIcon size="2rem" />
            )}
          </label>
          <input
            type="checkbox"
            name="three"
            id="three"
            className="invisible"
            onChange={() => setStars(3)}
          />
          <label htmlFor="four" onMouseEnter={() => setStarHover(4)}>
            {stars >= 4 || starHover >= 4 ? (
              <FillStar size="2rem" />
            ) : (
              <EmptyStarIcon size="2rem" />
            )}
          </label>
          <input
            type="checkbox"
            name="four"
            id="four"
            className="invisible"
            onChange={() => setStars(4)}
          />
          <label htmlFor="five" onMouseEnter={() => setStarHover(5)}>
            {stars >= 5 || starHover >= 5 ? (
              <FillStar size="2rem" />
            ) : (
              <EmptyStarIcon size="2rem" />
            )}
          </label>
          <input
            type="checkbox"
            name="five"
            id="five"
            className="invisible"
            onChange={() => setStars(5)}
          />
        </div>
        <div className="control-group">
          <label htmlFor="feedback">Санал хүсэлт</label>
          <textarea name="feedback" id="feedback" cols="30" rows="3"></textarea>
        </div>
        <div className="flex justify-end w-full py-4">
          <button className="button bg-yellow">Санал хүсэлт илгээх</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
