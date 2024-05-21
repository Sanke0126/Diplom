import dbConnect from "../../../utils/mongo";
import Admin from "../../../model/Admin";
import { hashPassword } from "../../../utils/encrypt-auth";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    return res.status(422).json({ message: "Invalid input or password too weak" });
  }

  await dbConnect();

  const existing = await Admin.findOne({ email: email });

  if (existing) {
    return res.status(422).json({ message: `This email ${email} is already assigned or registered` });
  }

  const hashedPassword = await hashPassword(password);

  const result = await Admin.create({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!", data: result });
}

export default handler;
