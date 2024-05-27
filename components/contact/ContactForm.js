// import { useState } from "react";
// import FillStar from "../icons/FillStarIcon";
// import EmptyStarIcon from "../icons/EmptyStarIcon";

// const ContactForm = () => {
//   const [stars, setStars] = useState(0);
//   const [starHover, setStarHover] = useState(0);

//   return (
//     <div className="shadow-xl py-4 px-8 col-span-2 w-full">
//       <h2 className="font-bold text-4xl mb-6">Санал хүсэлтээ илгээнэ үү!</h2>
//       <form>
//         <div className="control-group">
//           <label htmlFor="name">Таны нэр</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             autoComplete="name"
//             placeholder="Your Name"
//           />
//         </div>
//         <h3 className="mb-2">Лингвини рестораныг та хэрхэн үнэлэх вэ?</h3>
//         <div
//           onMouseLeave={() => setStarHover(0)}
//           className="flex text-yellow mb-4 w-min"
//         >
//           <label htmlFor="one" onMouseEnter={() => setStarHover(1)}>
//             {stars >= 1 || starHover >= 1 ? (
//               <FillStar size="2rem" />
//             ) : (
//               <EmptyStarIcon size="2rem" />
//             )}
//           </label>
//           <input
//             type="checkbox"
//             name="one"
//             id="one"
//             className="invisible"
//             onChange={() => setStars(1)}
//           />
//           <label htmlFor="two" onMouseEnter={() => setStarHover(2)}>
//             {stars >= 2 || starHover >= 2 ? (
//               <FillStar size="2rem" />
//             ) : (
//               <EmptyStarIcon size="2rem" />
//             )}
//           </label>
//           <input
//             type="checkbox"
//             name="two"
//             id="two"
//             className="invisible"
//             onChange={() => setStars(2)}
//           />
//           <label htmlFor="three" onMouseEnter={() => setStarHover(3)}>
//             {stars >= 3 || starHover >= 3 ? (
//               <FillStar size="2rem" />
//             ) : (
//               <EmptyStarIcon size="2rem" />
//             )}
//           </label>
//           <input
//             type="checkbox"
//             name="three"
//             id="three"
//             className="invisible"
//             onChange={() => setStars(3)}
//           />
//           <label htmlFor="four" onMouseEnter={() => setStarHover(4)}>
//             {stars >= 4 || starHover >= 4 ? (
//               <FillStar size="2rem" />
//             ) : (
//               <EmptyStarIcon size="2rem" />
//             )}
//           </label>
//           <input
//             type="checkbox"
//             name="four"
//             id="four"
//             className="invisible"
//             onChange={() => setStars(4)}
//           />
//           <label htmlFor="five" onMouseEnter={() => setStarHover(5)}>
//             {stars >= 5 || starHover >= 5 ? (
//               <FillStar size="2rem" />
//             ) : (
//               <EmptyStarIcon size="2rem" />
//             )}
//           </label>
//           <input
//             type="checkbox"
//             name="five"
//             id="five"
//             className="invisible"
//             onChange={() => setStars(5)}
//           />
//         </div>

//         <div className="control-group">
//           <label htmlFor="feedback">Санал хүсэлт</label>
//           <textarea name="feedback" id="feedback" cols="30" rows="3"></textarea>
//         </div>
//         <div className="flex justify-end w-full py-4">
//           <button className="button bg-yellow">Санал хүсэлт илгээх</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import { useState } from "react";
import axios from "axios";
import FillStar from "../icons/FillStarIcon";
import EmptyStarIcon from "../icons/EmptyStarIcon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    stars: 0,
    testimonial: "",
  });
  const [starHover, setStarHover] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is for a star rating
    if (name.startsWith("star-")) {
      const starValue = parseInt(value);
      setFormData({ ...formData, stars: starValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleStarHover = (star) => {
    setStarHover(star);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/feedback", formData);
      console.log("Feedback submitted:", response.data);
      setFormData({ name: "", stars: 0, testimonial: "" });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <div className="shadow-xl py-4 px-8 col-span-2 w-full">
      <h2 className="font-bold text-4xl mb-6">Санал хүсэлтээ илгээнэ үү!</h2>
      <form onSubmit={handleSubmit}>
        <div className="control-group">
          <label htmlFor="name">Таны нэр</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder=""
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="control-group">
          <label htmlFor="feedback">Санал хүсэлт</label>
          <textarea
            name="testimonial"
            id="feedback"
            cols="30"
            rows="3"
            value={formData.testimonial}
            onChange={handleChange}
          ></textarea>
        </div>
        <h3 className="mb-2">Лингвини рестораныг та хэрхэн үнэлэх вэ?</h3>
        <div
          onMouseLeave={() => setStarHover(0)}
          className="flex text-yellow gap-2 mb-4 w-min h-[40px]"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <label
              key={star}
              htmlFor={`star-${star}`}
              onMouseEnter={() => handleStarHover(star)}
            >
              {formData.stars >= star || starHover >= star ? (
                <FillStar size="2.5rem" />
              ) : (
                <EmptyStarIcon size="2.5rem" />
              )}
              <input
                type="checkbox"
                name={`star-${star}`}
                id={`star-${star}`}
                className="invisible"
                value={star}
                onChange={handleChange}
              />
            </label>
          ))}
        </div>
        <div className="flex justify-end w-full py-4">
          <button type="submit" className="button bg-yellow">
            Санал хүсэлт илгээх
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
