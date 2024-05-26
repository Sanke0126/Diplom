import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    partySize: "",
    occasion: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Reservation successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          partySize: "",
          occasion: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        alert("Error making reservation. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error making reservation. Please try again.");
    }
  };

  return (
    <form
      className="reservation-form shadow-xl py-4 px-6 rounded-2xl border-2 border-slate-100"
      onSubmit={handleSubmit}
    >
      {/* (Form fields with onChange attribute to handle input changes) */}
      <div className="input-group">
        <div className="control-group">
          <label htmlFor="name">Нэр</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Naranbaatar"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="control-group">
          <label htmlFor="email">Эмайл</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="********@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="control-group">
          <label htmlFor="phone">Утасны дугаар</label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            placeholder="+976 ********"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="control-group">
          <label htmlFor="partySize">Хүний тоо</label>
          <select
            name="partySize"
            id="partySize"
            required
            value={formData.partySize}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Хүний тоог сонгоно уу
            </option>
            {[...Array(12).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i + 1 === 1 ? "person" : "people"}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="control-group">
        <label htmlFor="occasion">Тусгай үйл явдал</label>
        <select
          name="occasion"
          id="occasion"
          required
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            Үйл явдлыг сонгоно уу
          </option>
          {[
            "Dinner",
            "Birthday",
            "Corporate",
            "Wedding",
            "Anniversary",
            "Engagement",
            "Graduation",
            "Holiday",
            "Meeting",
            "Party",
            "Retirement",
            "Reunion",
          ].map((occasion, index) => (
            <option key={index} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <div className="control-group">
          <label htmlFor="date">Огноог сонгоно уу</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="control-group">
          <label htmlFor="time">Цагийг сонгоно уу</label>
          <input
            type="time"
            name="time"
            id="time"
            min="10:00:00"
            max="22:00:00"
            required
            value={formData.time}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="control-group">
        <label htmlFor="message">Тусгай хүсэлт байгаа юу?</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="3"
          placeholder="2 хүүхдийн суудал"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="w-full flex justify-end mt-4">
        <button className="button bg-yellow">Захиалах</button>
      </div>
    </form>
  );
};

export default ReservationForm;
