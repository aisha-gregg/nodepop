const mongoose = require("mongoose");

function resetDatabase() {
  mongoose.connection.db.dropCollection("tags");
}

module.exports = resetDatabase;
