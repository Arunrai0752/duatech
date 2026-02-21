import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ------------------ MONGODB URL FIXED ------------------ //
const MONGO_URL =
  "mongodb+srv://CERGIBWALE_DB_USER:YOUR_PASSWORD_HERE@cluster0.ogg6awx.mongodb.net/solarLeads?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("🔥 MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// --------------------- SCHEMA --------------------- //
const leadSchema = new mongoose.Schema(
  {
    type: String,
    name: String,
    phone: String,
    city: String,
    pincode: String,
    billAmount: String,
    consumerNumber: String,
    capacity: String,
    address: String,
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);

// --------------------- ROUTES ---------------------- //
app.post("/new-connection", async (req, res) => {
  try {
    await Lead.create({ type: "new", ...req.body });
    res.send("New Solar Lead Saved!");
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/service-request", async (req, res) => {
  try {
    await Lead.create({ type: "service", ...req.body });
    res.send("Service Lead Saved!");
  } catch (err) {
    res.status(400).send(err);
  }
});

// -------------------- RENDER PORT FIX ---------------------- //
app.listen(process.env.PORT || 5000, () =>
  console.log("🚀 Server Running (Render Compatible)")
);
