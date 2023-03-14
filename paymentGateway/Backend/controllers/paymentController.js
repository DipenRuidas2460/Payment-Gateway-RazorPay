require("dotenv").config();

const crypto = require("crypto");

const Razorpay = require("razorpay");

const paymentModel = require("../model/paymentModel.js");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECERT,
});

const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR"
  };
  const order = await instance.orders.create(options);

  return res.status(200).json({ success: true, order });
};

const paymentVarification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECERT)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {

    // Database came here

    await paymentModel.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    return res
      .status(302)
      .redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
  } else {
    return res.status(400).json({ success: false, message: "Payment Failed!" });
  }
};

module.exports = { checkout, paymentVarification };
