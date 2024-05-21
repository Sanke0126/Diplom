const CartForm = (props) => {
  const {
    customerName,
    email,
    phone,
    table,
    payment,
    onChangeCustomerName,
    onChangeEmail,
    onChangePhone,
    onChangeTable,
    onChangePayment,
  } = props;

  return (
    <div className="w-full h-full flex flex-col justify-between xl:col-span-2">
      <div>
        <div className="input-group">
          <div className="control-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Naranbaatar"
              value={customerName}
              onChange={(e) => onChangeCustomerName(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label htmlFor="email">Email (optional)</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="********@example.com"
              value={email}
              onChange={(e) => onChangeEmail(e.target.value)}
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
              placeholder="+976 **** ****"
              value={phone}
              onChange={(e) => onChangePhone(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label htmlFor="table">Table Number</label>
            <select
              name="table"
              id="table"
              required
              value={table}
              onChange={(e) => onChangeTable(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Select table number
              </option>
              {[...Array(12).keys()].map((i) => (
                <option key={i + 1} value={`A${i + 1}`}>
                  A{i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="control-group">
          <label htmlFor="payment">Payment Method</label>
          <select
            name="payment"
            id="payment"
            defaultValue={payment}
            onChange={(e) => onChangePayment(e.target.value)}
          >
            <option value="Cash">Pay Cash</option>
            <option value="BCA">BCA m-banking</option>
            <option value="BNI">BNI m-banking</option>
            <option value="OVO">OVO payment</option>
            <option value="Gopay">Gopay payment</option>
          </select>
        </div>
        <div>
          <button className="button bg-yellow w-full">order</button>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
