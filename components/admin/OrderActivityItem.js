import { useState } from "react";

const OrderActivityItem = ({ item }) => {
  const [seeDetails, setSeeDetails] = useState(false);

  const date = new Date(item.createdAt);
  const formattedHour = ("0" + date.getHours()).slice(-2);
  const formattedMinutes = ("0" + date.getMinutes()).slice(-2);
  const createdAt = `${date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "2-digit",
    month: "short",
    day: "numeric",
  })} ${formattedHour}:${formattedMinutes}`;

  return (
    <div className="mb-6 border-b-2 border-stone-100 pb-2">
      <div className="w-full activity-table grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-x-6">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-4 justify-start col-span-2 xl:col-span-4">
          <h5>OrderID</h5>
          <h6 className="xl:mt-1">{item._id}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>Name</h5>
          <h6>{item.name}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>Email</h5>
          <h6>{item.email}</h6>
        </div>
        <div className="flex flex-col justify-start ml-[50px]">
          <h5>Order Amount</h5>
          <h6>{item.orderedMeals.length}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>Order Made</h5>
          <h6>{createdAt}</h6>
        </div>
      </div>
      {!seeDetails && (
        <div className="flex justify-start">
          <button
            onClick={() => setSeeDetails((prev) => !prev)}
            className="text-blue-600"
          >
            See Details
          </button>
        </div>
      )}
      {seeDetails && (
        <div className="mt-4 w-fit md:w-[450px]">
          {item.orderedMeals.map((meal, index) => (
            <div key={index} className="flex flex-col mb-2">
              <div className="flex justify-between gap-6">
                <h5>{meal.name}</h5>
                <div className="flex gap-4">
                  <h5>{`x${meal.amount}`}</h5>
                  <h5>{`MNT ${(meal.amount * meal.price).toLocaleString(
                    "en-US"
                  )}₮`}</h5>
                </div>
              </div>
              {meal.note && <p className="text-sm">{`note: ${meal.note}`}</p>}
            </div>
          ))}
          <div className="flex justify-between font-semibold mt-4">
            <h5>Total price</h5>
            <h5>{`MNT ${item.totalAmount.toLocaleString("en-US")}₮`}</h5>
          </div>
          <button
            onClick={() => setSeeDetails((prev) => !prev)}
            className="text-blue-600 mt-2"
          >
            Hide Details
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderActivityItem;
