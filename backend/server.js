const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// --- 1. SETTINGS ---
app.use(cors());
app.use(express.json());

// --- 2. DATABASE CONNECTION (As per your image) ---
// Username: cergibwale_db_user
// Password: Vl49xx5IhqolvEF4
const mongoURI = "mongodb+srv://cergibwale_db_user:Vl49xx5IhqolvEF4@cluster0.ogg6awx.mongodb.net/Duatech_solar_leads?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
  .then(() => console.log('✅ Connected to MongoDB: Duatech_solar_leads'))
  .catch(err => console.error('❌ Connection Error:', err));

// --- 3. DATA STRUCTURE (Schema) ---
const LeadSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  address: String,
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('leads', LeadSchema);

// --- 4. API ROUTES ---

// Admin Dashboard के लिए डेटा भेजना
app.get('/api/leads', async (req, res) => {
  try {
    const data = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// वेबसाइट से नया डेटा जमा करना
app.post('/api/leads', async (req, res) => {
  try {
    const newEntry = new Lead(req.body);
    await newEntry.save();
    res.status(201).json({ message: "Lead Captured!" });
  } catch (err) {
    res.status(400).json({ error: "Failed to save" });
  }
});

// --- 5. RUN SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server ready on port ${PORT}`));
