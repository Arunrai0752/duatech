import { useState } from "react";

export default function LeadForm() {
  const [type, setType] = useState("");

  return (
    <div className="px-6 py-10 max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Solar Inquiry Form</h2>

      {/* BUTTONS */}
      <div className="flex justify-between mb-6">
        <button
          className={`w-1/2 p-3 mr-2 rounded text-black ${
            type === "new" ? "bg-blue-600" : "bg-gray-500"
          }`}
          onClick={() => setType("new")}
        >
          For New Solar Connection
        </button>

        <button
          className={`w-1/2 p-3 ml-2 rounded text-black ${
            type === "Service" ? "bg-blue-600" : "bg-gray-500"
          }`}
          onClick={() => setType("Service")}
        >
          For Service Only
        </button>
      </div>

      {/* NEW CONNECTION FORM */}
      {type === "new" && (
        <form
          method="POST"
          action="http://localhost:5000/new-connection"
          className="space-y-4"
        >
          {/* Change: Yahan text-black add kiya hai */}
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="tel"
            name="phone"
            required
            maxLength="10"
            pattern="[0-9]{10}"
            placeholder="Phone Number (10 digits)"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="text"
            name="city"
            required
            placeholder="City"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="number"
            name="pincode"
            required
            placeholder="Pincode"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="number"
            name="billAmount"
            required
            placeholder="Bill Amount"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="text"
            name="consumerNumber"
            required
            placeholder="Consumer Number"
            className="w-full border p-3 rounded text-black"
          />

          <textarea
            name="address"
            required
            placeholder="Full Address"
            className="w-full border p-3 rounded text-black"
          ></textarea>

          <button className="w-full bg-blue-600 text-white p-3 rounded text-lg">
            Submit
          </button>
        </form>
      )}

      {/* SERVICE FORM */}
      {type === "Service" && (
        <form
          method="POST"
          action="http://localhost:5000/Service-request"
          className="space-y-4"
        >
          {/* Change: Yahan bhi text-black add kiya hai */}
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="tel"
            name="phone"
            required
            maxLength="10"
            pattern="[0-9]{10}"
            placeholder="Phone Number (10 digits)"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="text"
            name="capacity"
            required
            placeholder="Plant Capacity (kW)"
            className="w-full border p-3 rounded text-black"
          />

          <textarea
            name="address"
            required
            placeholder="Full Address"
            className="w-full border p-3 rounded text-black"
          ></textarea>

          <button className="w-full bg-blue-600 text-white p-3 rounded text-lg">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
