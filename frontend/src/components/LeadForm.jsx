import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, MapPin, Hash, Zap, Send, CheckCircle } from "lucide-react";
import { API } from "../api/Api";

const inputBase =
  "w-full rounded-xl px-4 py-3 text-cloud-white placeholder-cloud-gray/50 " +
  "bg-cloud-white/10 border border-solar-panel/20 outline-none " + // Increased opacity from 5 to 10
  "focus:border-sun-primary/60 focus:bg-cloud-white/20 transition-all duration-300 text-sm " + // Increased focus opacity
  "autofill:bg-cloud-white/20 autofill:text-cloud-white"; // Added autofill styles

const FieldWrapper = ({ icon: Icon, children }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sun-primary/60 pointer-events-none z-10">
      <Icon size={15} />
    </span>
    <div className="[&>input]:pl-9 [&>textarea]:pl-9 [&>select]:pl-9">{children}</div>
  </div>
);

const formVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.97 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.97 }),
};

export default function LeadForm() {
  const [type, setType] = useState(""); // "new" | "service"
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

  const selectType = (val) => {
    setDirection(val === "new" ? 1 : -1);
    setType(val);
    setFormData({});
    setStatus("");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      inquiryType: type,
    }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!type) return;

  setStatus("sending");

  try {
    let response;

    if (type === "new") {
      response = await API.post("/new/connection", {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        city: formData.city,
        pincode: formData.pincode,
        fullAddress: formData.fullAddress,
      });
    } else {
      response = await API.post("/old/service", {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        plantCapacity: formData.plantCapacity,
      });
    }

    console.log("✅ Server Response:", response.data);

    setStatus("success");
    setFormData({});

  } catch (err) {
    console.error("❌ Submit error:", err.response?.data || err.message);
    setStatus("error");
  }
};

  return (
    <div className="min-h-screen bg-sky-deep flex items-center justify-center px-6 py-16">
      {/* Glow bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-solar-panel rounded-full blur-[160px] opacity-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-sun-primary rounded-full blur-[160px] opacity-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg"
      >
        {/* Card */}
        <div className="bg-sky-deep/80 border border-solar-panel/20 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-sunrise px-8 py-6 text-center">
            <p className="text-sky-deep/70 text-xs font-black uppercase tracking-[0.3em]">Duva Tech</p>
            <h2 className="text-2xl font-black text-sky-deep uppercase tracking-tight mt-1">
              Solar Inquiry Form
            </h2>
          </div>

          <div className="px-8 py-8">
            {/* Toggle Buttons */}
            <div className="flex gap-3 mb-8">
              {[
                { val: "new", label: "New Connection" },
                { val: "service", label: "Service Only" },
              ].map(({ val, label }) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => selectType(val)}
                  className={`flex-1 py-3 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-300 ${type === val
                      ? "bg-sun-primary text-sky-deep shadow-[0_0_16px_rgba(255,179,71,0.4)]"
                      : "bg-cloud-white/5 text-cloud-gray border border-solar-panel/20 hover:border-sun-primary/40 hover:text-cloud-white"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* No type selected */}
            <AnimatePresence mode="wait">
              {!type && (
                <motion.p
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-cloud-gray/50 text-center text-sm py-6"
                >
                  Please select an option above to continue.
                </motion.p>
              )}
            </AnimatePresence>

            {/* Form with swap animation */}
            <AnimatePresence mode="wait" custom={direction}>
              {type && (
                <motion.form
                  key={type}
                  custom={direction}
                  variants={formVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Full Name */}
                  <FieldWrapper icon={User}>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Full Name"
                      value={formData.fullName || ""}
                      onChange={handleChange}
                      className={inputBase}
                      style={{ color: 'black' }} // Ensure text is white
                    />
                  </FieldWrapper>

                  {/* Phone */}
                  <FieldWrapper icon={Phone}>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      maxLength="10"
                      placeholder="Phone Number"
                      value={formData.phoneNumber || ""}
                      onChange={handleChange}
                      className={inputBase}
                      style={{ color: 'black' }}
                    />
                  </FieldWrapper>

                  {/* Conditional fields */}
                  {type === "new" ? (
                    <>
                      <FieldWrapper icon={MapPin}>
                        <input
                          type="text"
                          name="city"
                          required
                          placeholder="City"
                          value={formData.city || ""}
                          onChange={handleChange}
                          className={inputBase}
                          style={{ color: 'black' }}
                        />
                      </FieldWrapper>

                      <FieldWrapper icon={Hash}>
                        <input
                          type="number"
                          name="pincode"
                          required
                          placeholder="Pincode"
                          value={formData.pincode || ""}
                          onChange={handleChange}
                          className={inputBase}
                          style={{ color: 'black' }}
                        />
                      </FieldWrapper>
                    </>
                  ) : (
                    <FieldWrapper icon={Zap}>
                      <input
                        type="text"
                        name="plantCapacity"
                        required
                        placeholder="Plant Capacity (kW)"
                        value={formData.plantCapacity || ""}
                        onChange={handleChange}
                        className={inputBase}
                        style={{ color: 'black' }}
                      />
                    </FieldWrapper>
                  )}

                  {/* Address */}
                  <FieldWrapper icon={MapPin}>
                    <textarea
                      name="fullAddress"
                      required
                      rows={3}
                      placeholder="Full Address"
                      value={formData.fullAddress || ""}
                      onChange={handleChange}
                      className={`${inputBase} resize-none`}
                      style={{ color: 'black' }}
                    />
                  </FieldWrapper>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm 
                      flex items-center justify-center gap-2 transition-all duration-300
                      ${status === "success"
                        ? "bg-solar-panel text-cloud-white"
                        : "bg-sun-primary text-sky-deep hover:bg-sun-secondary shadow-[0_0_20px_rgba(255,179,71,0.3)]"
                      }`}
                  >
                    {status === "sending" && (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-4 h-4 border-2 border-sky-deep/30 border-t-sky-deep rounded-full inline-block"
                      />
                    )}
                    {status === "success" && <CheckCircle size={16} />}
                    {status === "sending" && "Sending..."}
                    {status === "success" && "Submitted!"}
                    {(status === "" || status === "error") && (
                      <>
                        <Send size={15} /> Submit Request
                      </>
                    )}
                  </motion.button>

                  {/* Status messages */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center text-sm text-red-400 font-bold"
                      >
                        ❌ Could not connect to server. Try again.
                      </motion.p>
                    )}
                    {status === "success" && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center text-sm text-solar-panel-light font-bold"
                      >
                        ✅ Your inquiry has been submitted successfully!
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
