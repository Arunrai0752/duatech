const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Config load करना
dotenv.config();

const app = express();

// 1. Middleware
// 'cors' लगाना सबसे जरूरी है ताकि वर्सेल से डेटा आ सके
app.use(cors());
app.use(express.json());

// 2. MongoDB Connection
// रेंडर के 'Environment Variables' में MONGO_URI जरूर डालना
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log("✅ Database Connected Successfully"))
  .catch((err) => console.error("❌ Database Connection Failed:", err));

// 3. Lead Schema (जैसा तेरे प्रोजेक्ट में था)
// 3. Lead Schema (नए फॉर्म के हिसाब से अपडेटेड)
const leadschema = new mongoose.Schema({
  name: String,
  mobile: String,      // फ्रंटएंड में 'mobile' नाम रखा है हमने
  address: String,
  email: String,
  serviceType: String,      // New or Old
  projectType: String,      // Residential/Industrial
  monthlyBill: String,
  sanctionLoad: String,
  installedSize: String,    // Old plant size के लिए
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadschema);

// 4. API Routes
// लीड्स जमा करने के लिए (Frontend से आएगा)
app.post('/api/leads', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json({ success: true, message: "Lead saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// लीड्स दिखाने के लिए (Admin Panel के लिए)
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ success: false, error: "Fetching failed" });
  }
});

// 5. Server Port Setup
// रेंडर खुद PORT असाइन करता है, इसलिए process.env.PORT जरूरी है
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Server is running on port ${PORT}`);
});
