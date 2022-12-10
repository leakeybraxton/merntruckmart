const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Models/connect")
const path = require("path")
const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 3000;

// Connect todb
connectDB();


app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listen on port ${PORT}`);
});
