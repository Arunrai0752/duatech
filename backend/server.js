import express  from "express"
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./src/DB/mongo.js"
import newrouter from "./src/Routes/routes.newform.js";
import servicerouter from "./src/Routes/routes.serviceform.js";


// .env file load karo
dotenv.config();

const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(express.json());   


app.use("/api/new" ,newrouter)
app.use("/api/old" , servicerouter)


// ── Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  connectDB()
});