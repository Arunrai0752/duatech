import { useState } from "react";

export default function LeadForm() {
  const [type, setType] = useState("");

  // Inputs ke liye style: Dark background par White text ekdum saaf dikhega
  const inputStyle = {
    color: 'white', 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Halka transparent white
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '12px',
    outline: 'none'
  };

  return (
    /* MAINE YAHAN CHANGE KIYA HAI: bg-white ko hata kar bg-[#0A1F44] kar diya */
    <div className="px-6 py-10 max-w-lg mx-auto bg-[#0A1F44] shadow-2xl rounded-2xl mt-6 border border-[#00FF88]/20">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Solar <span className="text-[#00FF88]">Inquiry Form</span>
      </h2>

      {/* BUTTONS */}
      <div className="flex justify-between mb-6">
        <button
          className={`w-1/2 p-3 mr-2 rounded font-bold transition-all ${
            type === "new" ? "bg-[#00FF88] text-[#0A1F44]" : "bg-gray-700 text-white"
          }`}
          onClick={() => setType("new")}
        >
          New Connection
        </button>

        <button
          className={`w-1/2 p-3 ml-2 rounded font-bold transition-all ${
            type === "Service" ? "bg-[#00FF88] text-[#0A1F44]" : "bg-gray-700 text-white"
          }`}
          onClick={() => setType("Service")}
        >
          Service Only
        </button>
      </div>

      {/* FORM SECTION */}
      {type && (
        <form
          method="POST"
          action={type === "new" ? "http://localhost:5000/new-connection" : "http://localhost:5000/Service-request"}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full rounded focus:border-[#00FF88] transition-all"
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            required
            maxLength="10"
            placeholder="Phone Number"
            className="w-full rounded focus:border-[#00FF88] transition-all"
            style={inputStyle}
          />

          {type === "new" ? (
            <>
              <input type="text" name="city" required placeholder="City" className="w-full rounded" style={inputStyle} />
              <input type="number" name="pincode" required placeholder="Pincode" className="w-full rounded" style={inputStyle} />
              <input type="number" name="billAmount" required placeholder="Bill Amount" className="w-full rounded" style={inputStyle} />
              <input type="text" name="consumerNumber" required placeholder="Consumer Number" className="w-full rounded" style={inputStyle} />
            </>
          ) : (
            <input type="text" name="capacity" required placeholder="Plant Capacity (kW)" className="w-full rounded" style={inputStyle} />
          )}

          <textarea
            name="address"
            required
            placeholder="Full Address"
            className="w-full rounded focus:border-[#00FF88] transition-all"
            style={inputStyle}
          ></textarea>

          <button className="w-full bg-[#00FF88] text-[#0A1F44] p-3 rounded text-lg font-black hover:bg-[#00e67a] transition-colors">
            SUBMIT REQUEST
          </button>
        </form>
      )}
      
      {!type && <p className="text-gray-400 text-center">Please select an option above to continue.</p>}
    </div>
  );
}
