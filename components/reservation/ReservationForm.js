const ReservationForm = () => {
  return (
    <form className="reservation-form shadow-xl py-4 px-6 rounded-2xl border-2 border-slate-100">
      <div className="input-group">
        <div className="control-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Naranbaatar"
          />
        </div>
        <div className="control-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="********@example.com"
          />
        </div>
      </div>
      <div className="input-group">
        <div className="control-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            placeholder="+976 ********"
          />
        </div>
        <div className="control-group">
          <label htmlFor="partySize">Party Size</label>
          <select name="partySize" id="partySize" required defaultValue="">
            <option value="" disabled hidden>
              Select party size
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
        <label htmlFor="occasion">Occasion</label>
        <select name="occasion" id="occasion" required defaultValue="">
          <option value="" disabled hidden>
            Select occasion
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
          <label htmlFor="date">Select Date</label>
          <input type="date" name="date" id="date" required />
        </div>
        <div className="control-group">
          <label htmlFor="time">Select Time</label>
          <input
            type="time"
            name="time"
            id="time"
            min="10:00:00"
            max="22:00:00"
            required
          />
        </div>
      </div>
      <div className="control-group">
        <label htmlFor="message">Any special request?</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="3"
          placeholder="e.g. I need 2 baby seats"
        />
      </div>
      <div className="w-full flex justify-end mt-4">
        <button className="button bg-yellow">Book Now</button>
      </div>
    </form>
  );
};

export default ReservationForm;
