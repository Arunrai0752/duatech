import mongoose from "mongoose";

const newConnectionSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
      minlength: [3, "Full Name must be at least 3 characters"]
    },

    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
      match: [/^[6-9]\d{9}$/, "Enter a valid Indian phone number"],
      index: true
    },

    city: {
      type: String,
      required: [true, "City is required"],
      trim: true
    },

    pincode: {
      type: String,
      required: [true, "Pincode is required"],
      match: [/^\d{6}$/, "Enter valid 6 digit pincode"]
    },

    fullAddress: {
      type: String,
      required: [true, "Full Address is required"],
      trim: true,
      minlength: [10, "Address too short"]
    }
  },
  {
    timestamps: true
  }
);

const NewConnection = mongoose.model("NewConnection", newConnectionSchema);

export default NewConnection;