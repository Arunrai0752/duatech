import { useState } from "react";
import { submitLead } from "../api/leadApi"; // leadApi ko connect kiya

export default function LeadForm() {
  const [type, setType] = useState("");
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState("");

  const inputStyle = {
    color: 'white', 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '12px',
    outline: 'none'
  };

  // Form input handle karne ke liye function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, inquiryType: type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Browser refresh rokne ke liye sabse zaroori
    setStatus("Sending...");
    
    try {
      // Ab ye seedha Render backend par jayega leadApi ke raste
      await submitLead(formData); 
      setStatus("Success! Your inquiry has been submitted.");
      setFormData({}); // Form clear karein
    } catch (err) {
      console.error(err);
      setStatus("Error: Could not connect to server. Try again.");
    }
  };

  return (
    <div className="px-6 py-10 max-w-lg mx-auto bg-[#0A1F44] shadow-2xl rounded-2xl mt-6 border border-[#00FF88]/20">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Solar <span className="text-[#00FF88]">Inquiry Form</span>
      </h2>

      {/* SERVICE SELECTION BUTTONS */}
      <div className="flex justify-between mb-6">
        <button
          type="button"
          className={`w-1/2 p-3 mr-2 rounded font-bold transition-all ${
            type === "new" ? "bg-[#00FF88] text-[#0A1F44]" : "bg-gray-700 text-white"
          }`}
          onClick={() => setType("new")}
        >
          New Connection
        </button>

        <button
          type="button"
          className={`w-1/2 p-3 ml-2 rounded font-bold transition-all ${
            type === "Service" ? "bg-[#00FF88] text-[#0A1F44]" : "bg-gray-700 text-white"
          }`}
          onClick={() => setType("Service")}
        >
          Service Only
        </button>
      </div>

      {type && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            onChange={handleChange}
            style={inputStyle}
            className="w-full rounded"
          />

          <input
            type="tel"
            name="mobile"
            required
            maxLength="10"
            placeholder="Phone Number"
            onChange={handleChange}
            style={inputStyle}
            className="w-full rounded"
          />

          {type === "new" ? (
            <>
              <input type="text" name="city" required placeholder="City" onChange={handleChange} style={inputStyle} className="w-full rounded" />
              <input type="number" name="pincode" required placeholder="Pincode" onChange={handleChange} style={inputStyle} className="w-full rounded" />
              <input type="text" name="serviceType" defaultValue="New Solar" hidden />
            </>
          ) : (
            <input type="text" name="serviceType" required placeholder="Plant Capacity (kW)" onChange={handleChange} style={inputStyle} className="w-full rounded" />
          )}

          <textarea
            name="address"
            required
            placeholder="Full Address"
            onChange={handleChange}
            style={inputStyle}
            className="w-full rounded"
          ></textarea>

          <button type="submit" className="w-full bg-[#00FF88] text-[#0A1F44] p-3 rounded text-lg font-black hover:bg-[#00e67a] transition-colors uppercase">
            Submit Request
          </button>
          
          {status && <p className="text-center mt-4 font-bold text-[#00FF88]">{status}</p>}
        </form>
      )}
      
      {!type && <p className="text-gray-400 text-center">Please select an option above to continue.</p>}
    </div>
  );
}
