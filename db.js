const mongoose = require("mongoose");
const dbHOST = process.env.dbHOST;
mongoose
  .connect(dbHOST)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log("Error while Mongo connection..", err);
  });
