import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./db/connect";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Database connected successfully");
    app.listen(process.env.PORT, () => {
      console.log(`Server is up and running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
