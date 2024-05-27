// import dbConnect from "../../../utils/mongo";
// import Order from "../../../model/Order";

// export default async function handler(req, res) {
//   const {
//     method,
//     query: { id },
//   } = req;

//   await dbConnect();

//   if (method === "GET") {
//     try {
//       const order = await Order.findById(id);
//       res.status(200).json(order);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }

//   if (method === "PUT") {
//     try {
//       const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
//       res.status(201).json(order);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
// }

import dbConnect from "../../../utils/mongo";
import Order from "../../../model/Order";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    try {
      const updateData = req.body;
      // If order is being canceled, update only the status
      if (updateData.orderStatus === "CANCELED") {
        const order = await Order.findByIdAndUpdate(
          id,
          { orderStatus: "CANCELED" },
          { new: true }
        );
        res.status(201).json(order);
      } else {
        const order = await Order.findByIdAndUpdate(id, updateData, {
          new: true,
        });
        res.status(201).json(order);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
