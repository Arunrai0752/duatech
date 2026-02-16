const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// 1. DATABASE CONNECTION
// पक्का करें कि आपने .env फाइल में MONGO_URI डाला है
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/duvatech_solar')
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.log("❌ DB Connection Error:", err));

// 2. LEAD SCHEMA (टेबल का पूरा ढांचा - कुछ भी मिसिंग नहीं है)
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, default: 'Not Provided' },
  address: { type: String, required: true },
  inquiryType: { type: String, required: true }, // New Installation / Service
  monthlyBill: { type: String, default: 'N/A' },   // सिर्फ नए कनेक्शन के लिए
  currentKW: { type: String, default: 'N/A' },     // सिर्फ सर्विस के लिए
  status: { type: String, default: 'Pending' },    // New, Processed, Closed
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadSchema);

// 3. API ROUTES

// A. नई लीड जमा करना (फ्रंटएंड फॉर्म के लिए)
app.post('/api/leads', async (req, res) => {
  try {
    const leadData = new Lead(req.body);
    await leadData.save();
    res.status(201).json({ success: true, message: "Lead saved successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// B. सारी लीड्स देखना (एडमिन पैनल के लिए)
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch leads" });
  }
});

// C. एडमिन लॉगिन (Password: admin123)
app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign({ user: 'admin' }, 'your_secret_key', { expiresIn: '1h' });
    return res.json({ success: true, token });
  }
  res.status(401).json({ success: false, message: "Invalid Credentials" });
});

// 4. SERVER START
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
