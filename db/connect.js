const mongoose = require("mongoose");

const connectDatabase = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(
      "An error occurred while connecting to the database:",
      err.message
    );
  }
};

const closeDatabase = async () => {
  await mongoose.connection.close();
};

module.exports = { connectDatabase, closeDatabase };
