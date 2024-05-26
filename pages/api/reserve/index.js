import dbConnect from "../../../utils/mongo";
import Reservation from "../../../model/Reservation";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const reservation = await Reservation.create(req.body);
        res.status(201).json({ success: true, data: reservation });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "GET":
      try {
        const reservations = await Reservation.find({});
        res.status(200).json({ success: true, data: reservations });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
