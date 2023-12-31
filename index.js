const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const employeeroutes = require("./routes/employeeRoutes");

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://sushilkrishnanvlr:12345@cluster0.se7psbj.mongodb.net/Company"
);

const db = mongoose.connection;
db.on("open", () => {
  console.log("Database connected");
});
db.on("error", (err) => {
  console.log("Error while connecting to database", err);
});

app.use(express.json());

app.use(cors());
app.use("/employee", employeeroutes);

const port = 5050;
app.listen(port, () => {
  console.log("server started on " + port);
});
