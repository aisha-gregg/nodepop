const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: String,
  photo: { data: Buffer, contentType: String }
});
const Photo = mongoose.model("Photo", photoSchema);
module.exports = {
  Photo,
  photoSchema
};
