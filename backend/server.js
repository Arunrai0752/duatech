const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// --- 1. MIDDLEWARE (वेबसाइट और सर्वर को जोड़ने के लिए) ---
app.use(cors());
app.use(express.json());

// --- 2. MONGODB CONNECTION (आपकी फोटो वाला असली लिंक) ---
// इसमें आपका यूजरनेम, पासवर्ड और डेटाबेस नाम सब सही सलामत डाल दिया है
const mongoURI = "mongodb+srv://cergibwale_db_user:Vl49xx5IhqolvEF4@cluster0.ogg6awx.mongodb.net/Duatech_solar_leads?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// --- 3. DATA SCHEMA (डेटाबेस में क्या सेव होगा) ---
const LeadSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  address: String,
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('leads', LeadSchema);

// --- 4. API ROUTES (डेटा लेने और देने के रास्ते) ---

// यह रास्ता एडमिन पैनल में डेटा दिखाने के लिए है
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ message: "Data fetch fail" });
  }
});

// यह रास्ता वेबसाइट से नया फॉर्म डेटा सेव करने के लिए है
app.post('/api/leads', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json({ message: "Lead saved!" });
  } catch (err) {
    res.status(400).json({ message: "Save fail" });
  }
});

// --- 5. SERVER PORT (पोर्ट सेटिंग - रेंडर और वर्सेल के लिए) ---
// यह लाइन सबसे ज़रूरी है, यह अपने आप सही पोर्ट चुन लेगी
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
