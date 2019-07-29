const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodepop", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  const tagSchema = new mongoose.Schema({
    id: Number,
    name: String
  });
  const Tag = mongoose.model("Tag", tagSchema);
  const work = new Tag({
    id: 1,
    name: "Work"
  });
  console.log(work.name);

  work.save()
});

