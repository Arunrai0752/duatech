const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://cergibwale_db_user:Vl149xx5IHq9p8Ld@cluster0.p78vi.mongodb.net/Solar_Lead?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ Connection Error:', err));

// Lead Schema
const LeadSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    address: String,
    serviceType: String,
    projectType: String,
    monthlyBill: String,
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', LeadSchema);

// --- API Routes ---

// 1. नई लीड सेव करने के लिए
app.post('/api/leads', async (req, res) => {
    try {
        const newLead = new Lead(req.body);
        await newLead.save();
        res.status(201).json({ success: true, message: "Lead saved successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}); // <--- यहाँ ब्रैकेट बंद नहीं था, अब ठीक कर दिया है

// 2. एडमिन लॉगिन के लिए
app.post('/api/login', (req, res) => {
    const { password } = req.body;
    // पासवर्ड यहाँ '123' रखा है
    if (password === "123") {
        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ success: false, message: "गलत पासवर्ड!" });
    }
});

// 3. सारी लीड्स देखने के लिए
app.get('/api/admin/leads', async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (error) {
        res.status(500).json({ error: "Fetching failed" });
    }
});

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
