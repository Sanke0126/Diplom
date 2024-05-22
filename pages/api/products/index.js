import dbConnect from "../../../utils/mongo";
import Product from "../../../model/Product";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    case "POST":
      try {
        const { category, name, desc, price, url, bestSeller, recommended } =
          req.body;

        const validCategories = [
          "MAIN DISH",
          "SALAD",
          "SOUP",
          "MONGOLIAN",
          "GRILLED",
          "HOT DRINK",
          "ADDITIONAL",
          "DESSERT",
          "PIZZA",
          "ALCOHOL",
          "WINE",
          "DRINKS",
        ];
        if (!validCategories.includes(category)) {
          return res.status(400).json({ error: "Invalid category" });
        }

        const product = new Product({
          category,
          name,
          desc,
          price,
          url,
          bestSeller,
          recommended,
        });
        await product.save();

        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    case "PUT":
      try {
        const {
          id,
          category,
          name,
          desc,
          price,
          url,
          bestSeller,
          recommended,
        } = req.body;

        const validCategories = [
          "MAIN DISH",
          "SALAD",
          "SOUP",
          "MONGOLIAN",
          "GRILLED",
          "HOT DRINK",
          "ADDITIONAL",
          "DESSERT",
          "PIZZA",
          "ALCOHOL",
          "WINE",
          "DRINKS",
        ];
        if (!validCategories.includes(category)) {
          return res.status(400).json({ error: "Invalid category" });
        }

        const product = await Product.findByIdAndUpdate(
          id,
          {
            category,
            name,
            desc,
            price,
            url,
            bestSeller,
            recommended,
          },
          { new: true }
        );

        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.body;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
