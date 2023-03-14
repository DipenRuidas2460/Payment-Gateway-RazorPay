const express = require("express");

const mongoose = require("mongoose")

require("dotenv").config();

const paymentRoute = require("./routes/paymentRoutes.js");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const url = process.env.MONGO_URL

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Connected to MongoDB Sucessfully!");
  })
  .catch((err) => console.log(err));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) => {
  return res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port:- ${process.env.PORT}`);
});
