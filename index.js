const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json()); //helps accepting the payload
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Products API running");
});
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT} `);
});
