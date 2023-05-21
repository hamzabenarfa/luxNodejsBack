const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const destinationRoute = require("./routes/destination");


const port = process.env.PORT || 4000;

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
url ="mongodb+srv://hamaz:hamza@luxuriatravel.5pw3i3t.mongodb.net/lux?retryWrites=true&w=majority"
console.log(process.env.url)
mongoose.set("strictQuery", false);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/destination", destinationRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});