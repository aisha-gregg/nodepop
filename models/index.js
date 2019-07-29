const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodepop", {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  mongoose.connection.db.dropCollection("tags");

  const tagSchema = new mongoose.Schema({
    id: Number,
    name: String
  });
  const Tag = mongoose.model("Tag", tagSchema);
  const work = new Tag({
    id: 1,
    name: "Work"
  });

  const lifestyle = new Tag({
    id: 2,
    name: "Lifestyle"
  });

  const motor = new Tag({
    id: 3,
    name: "Motor"
  });

  const mobile = new Tag({
    id: 4,
    name: "Mobile"
  });

  work.save();
  lifestyle.save();
  motor.save();
  mobile.save();
});
