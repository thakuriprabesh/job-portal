const mongoose = require("mongoose");
const adminSeeder = require("../scripts/admin_seeder");

try {
  dbConfig = async (URI) => {
    console.log(URI);
    await mongoose.connect(URI);
    console.log("Database Connected successfully.");
    adminSeeder();
  };
} catch (err) {
  console.log("Error connecting database.");
}

module.exports = dbConfig;
