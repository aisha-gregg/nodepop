const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  value: Number,
  currency: String
});
const Price= mongoose.model("Price", priceSchema);
module.exports = Price;


