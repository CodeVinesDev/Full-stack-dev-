import dotev from "dotenv";
dotev.config();
import mongoose from "mongoose";

const connectDb = async () => {
  const conncted = await mongoose.connect(process.env.MONGODB_URI);

  if (conncted) {
    console.log("mongo db connected succfully !");
  } else {
    console.log("somhting wrong happend with databases");
    process.exit(1);
  }
};

export default connectDb;
