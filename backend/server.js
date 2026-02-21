import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables (Security ke liye)
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------------ DATABASE CONNECTION ------------------ //
// Isko env file mein rakhna best hai, par filhal fix kar diya hai
const MONGO_URL = process.env.MONGO_URI || "mongodb+srv://cergibwale_db_user:VtdYMmaN9Cd0ZFni@cluster0.ogg6awx.mongodb.net/Duvatech_solar_leads?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("🔥 MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ DB Connection Error:", err.message));

// --------------------- SCHEMA --------------------- //
const leadSchema = new mongoose.Schema(
  {
    type: { type: String, required: true }, // 'new' or 'service'
    name: { type: String, required: true },
    phone: { type: String, required: true },
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

// Health Check Route (Render check karne ke liye ki server up hai)
app.get("/", (req, res) => res.send("Solar Server is Running..."));

// Route for New Connections
app.post("/new-connection", async (req, res) => {
  try {
    const newLead = new Lead({ ...req.body, type: "new" });
    await newLead.save();
    res.status(201).json({ success: true, message: "New Solar Lead Saved!" });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Route for Service Requests
app.post("/service-request", async (req, res) => {
  try {
    const serviceLead = new Lead({ ...req.body, type: "service" });
    await serviceLead.save();
    res.status(201).json({ success: true, message: "Service Lead Saved!" });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// -------------------- SERVER LISTEN ---------------------- //
const PORT = process.env.PORT || 10000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
