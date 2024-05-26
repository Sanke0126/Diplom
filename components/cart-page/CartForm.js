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
            <label htmlFor="name">Таны нэр</label>
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
            <label htmlFor="email">Эмайл</label>
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
            <label htmlFor="phone">Утасны дугаар</label>
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
            <label htmlFor="table">Ширээний дугаар</label>
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
          <label htmlFor="payment">Төлбөрийн төрөл</label>
          <select
            name="payment"
            id="payment"
            defaultValue={payment}
            onChange={(e) => onChangePayment(e.target.value)}
          >
            <option value="Cash">Бэлнээр</option>
            <option value="Qpay">Qpay</option>
          </select>
        </div>
        <div>
          <button className="button bg-yellow w-full">Захиалах</button>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
