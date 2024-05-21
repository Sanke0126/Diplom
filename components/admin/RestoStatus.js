import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import axiosBase from "../../utils/axios-base";

const RestoStatus = ({ numOrdered, restoStatus }) => {
  console.log(restoStatus);
  const [isReceive, setIsReceive] = useState(
    restoStatus?.isReceivingOrder || false
  );
  const changeRestoStatusHandler = async () => {
    try {
      if (!restoStatus || !restoStatus._id) {
        console.error("Invalid resto status:", restoStatus);
        return;
      }

      const newStatus = !isReceive;
      const response = await axiosBase.put(`api/resto/${restoStatus._id}`, {
        isReceivingOrder: newStatus,
      });
      setIsReceive(response.data.isReceivingOrder);
    } catch (error) {
      console.error("Error updating resto status:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full lg:w-[400px] shadow-xl py-4 px-6 border-2 border-stone-100 rounded-xl">
      <div>
        <h2 className="text-3xl font-bold">Hungray</h2>
        <h5>Meet eat and taste the real taste</h5>
      </div>

      <div>
        <h3 className="font-semibold">Receive order</h3>
        <div className="flex justify-between">
          <label
            htmlFor="receiveOrderStatus"
            className={isReceive ? "text-green-600" : "text-red-600"}
          >
            {isReceive ? "open" : "closed"}
          </label>
          <Toggle
            id="receive-order-status"
            defaultChecked={isReceive}
            onChange={changeRestoStatusHandler}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="font-semibold">Meals & drinks ordered</h3>
        <h5>{numOrdered}</h5>
      </div>
    </div>
  );
};

export default RestoStatus;
