const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailySchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },

    mood: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Daily = mongoose.model("Daily", dailySchema);
module.exports = Daily;
