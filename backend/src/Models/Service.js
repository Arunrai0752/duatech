import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"]
    },

    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
      match: [/^[6-9]\d{9}$/, "Enter a valid Indian phone number"],
      index: true
    },

    plantCapacity: {
      type: Number,
      required: [true, "Plant Capacity is required"],
      min: [0.1, "Plant capacity must be greater than 0"],
      max: [10000, "Plant capacity too large"],
    }
  },
  {
    timestamps: true
  }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;