import { useState } from "react";
import axiosBase from "../../../utils/axios-base";

const OrderItem = ({ item, updateList }) => {
  const [seeDetails, setSeeDetails] = useState(false);

  const goToNextStageHandler = async () => {
    let action;

    if (item.orderStatus === "UNPAID") {
      action = "PAID";
    } else if (item.orderStatus === "PAID") {
      action = "COOKED";
    } else if (item.orderStatus === "COOKED") {
      action = "SERVED";
    }

    await axiosBase.put(`/api/orders/${item._id}`, {
      orderStatus: action,
    });

    updateList();
  };

  const cancelOrderHandler = async () => {
    await axiosBase.put(`/api/orders/${item._id}`, {
      orderStatus: "CANCELLED",
    });

    updateList();
  };

  return (
    <div className="mb-6 border-b-2 border-stone-100 pb-2">
      <div className="w-full activity-table grid grid-cols-2 lg:grid-cols-3 justify-start justify-items-start items-start gap-1 lg:gap-x-6">
        <div className="flex flex-col justify-start col-span-2">
          <h5>ЗахиалгынID</h5>
          <h6 className="">{item._id}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>Нэр</h5>
          <h6 className="">{item.name}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>Утасны дугаар</h5>
          <h6 className="">{item.phone}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>Ширээний тоо</h5>
          <h6 className="">{item.table}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>Төлбөрийн арга</h5>
          <h6 className="">{item.payment}</h6>
        </div>
      </div>
      {!seeDetails && (
        <div className="flex justify-start mt-4">
          <button
            onClick={() => setSeeDetails((prev) => !prev)}
            className="text-blue-600"
          >
            Дэлгэрэнгүй
          </button>
        </div>
      )}
      {seeDetails && (
        <div className="mt-4 w-fit md:w-[450px]">
          {item.orderedMeals.map((meal, index) => (
            <div key={index} className="flex justify-between gap-6">
              <h5>{meal.name}</h5>
              <div className="flex gap-4">
                <h5>{`x${meal.amount}`}</h5>
                <h5>{`MNT ${(meal.price * meal.amount).toLocaleString(
                  "en-US"
                )}`}</h5>
              </div>
            </div>
          ))}
          <div className="flex justify-between font-semibold">
            <h5>Нийт төлбөр</h5>
            <h5>{`MNT ${item.totalAmount.toLocaleString("en-US")}`}</h5>
          </div>
          <button
            onClick={() => setSeeDetails((prev) => !prev)}
            className="mt-4 text-blue-600"
          >
            Хаах
          </button>
        </div>
      )}
      <div className="w-full flex justify-between mt-2">
        {item.orderStatus !== "CANCELLED" && (
          <button
            onClick={goToNextStageHandler}
            className="button-sm bg-blue-600 text-white mr-2"
          >
            {item.orderStatus === "UNPAID"
              ? "Төлбөр баталгаажуулах"
              : item.orderStatus === "PAID"
              ? "Хоол бэлэн"
              : item.orderStatus === "COOKED" && "Захиалга дуусгах"}
          </button>
        )}
        {item.orderStatus !== "CANCELLED" && (
          <button
            onClick={cancelOrderHandler}
            className="button-sm bg-red-600 text-white"
          >
            Захиалга цуцлах
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderItem;
