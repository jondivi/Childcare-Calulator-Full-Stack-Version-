const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const CalculationSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  dateOfEvent: {
    type: String,
    required: true,
  },
  hoursStart: {
    type: String,
    required: true,
  },
  hoursEnd: {
    type: String,
    required: true,
  },
  hoursSpent: {
    type: Number,
    required: false,
  },
  amountUSD: {
    type: Number,
    required: true,
  },
  totalUSD: {
    type: Number,
    required: false,
  },
  // likes: {
  //   type: Number,
  //   required: true,
  // },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Calculation", CalculationSchema);
