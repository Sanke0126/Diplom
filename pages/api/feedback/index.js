import dbConnect from "../../../utils/mongo";
import Feedback from "../../../model/Feedback";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const feedback = await Feedback.create(req.body);
        res.status(201).json({ success: true, data: feedback });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "GET":
      try {
        const feedbackList = await Feedback.find({});
        res.status(200).json({ success: true, data: feedbackList });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
