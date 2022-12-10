const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {});

  console.log(`MongoDB connected you son of a bitch, sorry for cursing, i know there are children reading. But it's the MOTHERFUCKING TRUTH. Mongooo we are fucking in!`);
};

module.exports = connectDB;
