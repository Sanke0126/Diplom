// import { useState } from "react";
// import OrderActivityItem from "./OrderActivityItem";

// const OrderActivity = ({ orderList }) => {
//   const [selectedDate, setSelectedDate] = useState("");

//   const filteredOrders = selectedDate
//     ? orderList.filter(
//         (order) =>
//           new Date(order.createdAt).toLocaleDateString("en-US") ===
//           new Date(selectedDate).toLocaleDateString("en-US")
//       )
//     : orderList;

//   const sortedOrderList = filteredOrders.sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   const totalIncome = filteredOrders.reduce(
//     (total, order) => total + order.totalAmount,
//     0
//   );

//   return (
//     <div className="shadow-xl border-2 border-stone-100 p-6 rounded-xl w-full">
//       <h2 className="text-2xl font-semibold mb-6">Захиалгын үйл ажиллагаа</h2>

//       <div className="mb-4">
//         <label className="mr-2">Шүүх өдрөө сонгоно уу: </label>
//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="border p-2 rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">
//           Олсон орлого: MNT {totalIncome.toLocaleString("en-US")}₮
//         </h3>
//       </div>

//       <div className="h-[50vh] overflow-y-scroll">
//         <div className="h-screen w-full">
//           {sortedOrderList.map((item, index) => (
//             <OrderActivityItem key={index} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderActivity;

import { useState } from "react";
import OrderActivityItem from "./OrderActivityItem";

const OrderActivity = ({ orderList }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const filteredOrders = selectedDate
    ? orderList.filter(
        (order) =>
          new Date(order.createdAt).toLocaleDateString("en-US") ===
          new Date(selectedDate).toLocaleDateString("en-US")
      )
    : orderList;

  const nonCancelledOrders = filteredOrders.filter(
    (order) => order.orderStatus !== "CANCELED"
  );

  const sortedOrderList = nonCancelledOrders.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const totalIncome = nonCancelledOrders.reduce(
    (total, order) => total + order.totalAmount,
    0
  );

  return (
    <div className="shadow-xl border-2 border-stone-100 p-6 rounded-xl w-full">
      <h2 className="text-2xl font-semibold mb-6">Захиалгын үйл ажиллагаа</h2>

      <div className="mb-4">
        <label className="mr-2">Шүүх өдрөө сонгоно уу: </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">
          Олсон орлого: MNT {totalIncome.toLocaleString("en-US")}₮
        </h3>
      </div>

      <div className="h-[50vh] overflow-y-scroll">
        <div className="h-screen w-full">
          {sortedOrderList.map((item, index) => (
            <OrderActivityItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderActivity;
