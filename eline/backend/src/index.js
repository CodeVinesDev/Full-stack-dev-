import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import expess from "express";
import userRouter from "./routes/user.js";
const app = expess();

const PORT = process.env.PORT || 6000;
app.use(expess.json());

app.get("/", (req, res) => {
  return res.json("course sell backend");
});

app.use("/api", userRouter);

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
