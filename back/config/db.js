const mongoose = require("mongoose");

const connectMongoDb = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log(`server connection successfully `);
  } catch (error) {
    console.log(`error is occured${error}`);
  }
};

module.exports = {
  connectMongoDb,
};
