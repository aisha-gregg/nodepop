const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  id: Number,
  name: String
});
const Tag = mongoose.model("Tag", tagSchema);
module.exports = {
    Tag,
    tagSchema
}

