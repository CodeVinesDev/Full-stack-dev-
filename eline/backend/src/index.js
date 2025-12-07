import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import expess from "express";
const app = expess();

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  return res.json("course sell backend");
});

const startServer = async () => {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log("server started", PORT);
    });
  } catch (error) {
    console.log("somthogn erong wiht start server");
  }
};

startServer();
