import NewConnection from "../Models/newForm.model.js";
import Service from "../Models/Service.js";

/* =====================================================
   1️⃣ CREATE NEW CONNECTION
===================================================== */
export const createNewConnection = async (req, res) => {
  try {
    const { fullName, phoneNumber, city, pincode, fullAddress } = req.body;

    console.log(
         { fullName, phoneNumber, city, pincode, fullAddress }

    );
    
    // 🔎 Manual Validation Layer (Extra Safety)
    if (!fullName || !phoneNumber || !city || !pincode || !fullAddress) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // 📦 Save to DB
    const connection = await NewConnection.create({
      fullName,
      phoneNumber,
      city,
      pincode,
      fullAddress
    });

    return res.status(201).json({
      success: true,
      message: "New Connection Request Submitted",
      data: connection
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


/* =====================================================
   2️⃣ CREATE SERVICE REQUEST
===================================================== */
export const createServiceRequest = async (req, res) => {
  try {
    const { fullName, phoneNumber, plantCapacity } = req.body;

    console.log(  { fullName, phoneNumber, plantCapacity } );
    
    // 🔎 Manual Validation
    if (!fullName || !phoneNumber || !plantCapacity) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    if (plantCapacity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Plant capacity must be greater than 0"
      });
    }

    // 📦 Save to DB
    const service = await Service.create({
      fullName,
      phoneNumber,
      plantCapacity
    });

    return res.status(201).json({
      success: true,
      message: "Service Request Submitted",
      data: service
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};