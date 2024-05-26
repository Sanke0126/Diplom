import WhatsappIcon from "../icons/WhatsappIcon";

const OrderedDetails = ({ order }) => {
  const {
    email,
    name,
    orderStatus,
    orderedMeals,
    payment,
    phone,
    table,
    totalAmount,
  } = order;

  const formattedTotalAmount = `MNT​​​​​​​​​​​ ${totalAmount.toLocaleString(
    "en-US"
  )}₮`;

  return (
    <div className="flex flex-col justify-between shadow-xl p-4 md:p-8 rounded-xl w-full lg:w-[500px] border-2 border-stone-100">
      <div>
        <table className="text-left">
          <tbody>
            <tr>
              <th className="font-semibold">Захиалсан хүний нэр</th>
              <td>{`: ${name}`}</td>
            </tr>
            <tr>
              <th className="font-semibold">Ширээний дугаар</th>
              <td>{`: ${table}`}</td>
            </tr>
            <tr>
              <th className="font-semibold">Эмайл</th>
              <td>{`: ${email}`}</td>
            </tr>
            <tr>
              <th className="font-semibold">Утасны дугаар</th>
              <td>{`: ${phone}`}</td>
            </tr>
            <tr>
              <th className="font-semibold">Төлбөрийн төрөл</th>
              <td>{`: ${payment}`}</td>
            </tr>
            <tr>
              <th className="font-semibold">Захиалгын төлөв</th>
              <td>{`: ${orderStatus.toLowerCase()}`}</td>
            </tr>
          </tbody>
        </table>
        <ul className="mt-4">
          {orderedMeals.map((item, index) => (
            <li key={index} className="flex flex-col ">
              <div className="flex justify-between">
                <h2 className="font-semibold">{item.name}</h2>
                <div className="flex gap-2">
                  <h4>{`x${item.amount}`}</h4>
                  <h4>{`MNT ${(item.amount * item.price).toLocaleString(
                    "en-US"
                  )}₮`}</h4>
                </div>
              </div>
              {item.note && <p className="text-sm">{`note: ${item.note}`}</p>}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex justify-between pt-6 text-lg font-semibold">
          <h2>Нийт төлбөр</h2>
          <h2>{formattedTotalAmount}</h2>
        </div>
        <div className="pt-6 w-full">
          <a
            href="https://www.facebook.com/messages/t/100003899282380"
            target="_blank"
            rel="noreferrer"
            className="button flex justify-center items-center gap-2 w-full bg-green-700 text-white"
          >
            <WhatsappIcon size={"1.2rem"} />
            <span>Админтай холбогдох</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderedDetails;
