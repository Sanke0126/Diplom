import OrderedDetails from "./OrderedDetails";
import ProceedPayment from "./ProceedPayment";
import ProceedExpired from "./ProceedExpired";
import ProceedInKitchen from "./ProceedInKitchen";
import ProceedMealsComing from "./ProceedMealsComing";

const ProceedActions = ({ order, expiredDate, onUpdateLoadedOrder }) => {
  return (
    <div className="py-4 flex flex-col lg:flex-row gap-6">
      <OrderedDetails order={order} />
      {order.orderStatus === "UNPAID" && (
        <ProceedPayment
          payment={order.payment}
          expiredDate={expiredDate}
          status={order.orderStatus}
          onUpdateLoadedOrder={onUpdateLoadedOrder}
        />
      )}
      {order.orderStatus === "PAID" && (
        <ProceedInKitchen updatedAt={order.updatedAt} />
      )}
      {order.orderStatus === "COOKED" && <ProceedMealsComing />}
      {(order.orderStatus === "EXPIRED" ||
        order.orderStatus === "CANCELED") && <ProceedExpired />}
    </div>
  );
};

export default ProceedActions;
