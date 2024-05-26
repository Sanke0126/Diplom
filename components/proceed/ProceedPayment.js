import { useRouter } from "next/router";

import Image from "next/image";
import axiosBase from "../../utils/axios-base";
import LoadingIcon from "../icons/LoadingIcon";

const ProceedPayment = ({
  payment,
  status,
  expiredDate,
  onUpdateLoadedOrder,
}) => {
  const route = useRouter();
  const formattedExpiredDate = `${("0" + expiredDate.getHours()).slice(-2)}:${(
    "0" + expiredDate.getMinutes()
  ).slice(-2)}`;

  const cancelOrderHandler = async () => {
    const res = await axiosBase.put(`/api/orders/${route.query.id}`, {
      orderStatus: "CANCELED",
    });

    onUpdateLoadedOrder(res.data);
    console.log(res);
  };

  return (
    <div className="flex-[1] border-2 border-stone-100 shadow-xl p-6 rounded-xl">
      {status !== "EXPIRED" && (
        <div className="flex justify-between">
          <h3>Төлбөр баталгаажуулах: </h3>
          <h3 className="animate-pulse font-bold">{formattedExpiredDate}</h3>
        </div>
      )}
      {status === "EXPIRED" && (
        <div className="flex justify-between">
          <h3>Your order is expired </h3>
        </div>
      )}
      <div className="flex justify-between py-6 h-[98.5%]">
        <div className="flex flex-col justify-between items-start">
          <div>
            {payment !== "Cash" && (
              <>
                <h3>Төлөх төрөл:</h3>
                <h2 className="text-xl font-bold">{`${payment}`}</h2>
              </>
            )}
            {payment === "Cash" && (
              <>
                <h2 className="text-xl font-bold">
                  Та төлбөрөө касс-нд тушаана уу
                </h2>
                <p className="">{`Төлбөрийн хугацаа дуусахаас өмнө кассанд хийх төлбөрөө хийх шаардлагатай.`}</p>
                <div className="w-full py-6 grid place-items-center">
                  <div className="animate-spin w-fit">
                    <LoadingIcon size="2rem" />
                  </div>
                </div>
              </>
            )}
          </div>
          <button
            onClick={cancelOrderHandler}
            className="button bg-red-600 text-white"
          >
            Захиалга цуцлах
          </button>
        </div>
        {payment !== "Cash" && (
          <div>
            <Image
            className="mr-[70px]"
              src={`/images/proceed/${payment.toLowerCase()}.png`}
              alt={`${payment}`}
              width={300}
              height={300}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProceedPayment;
