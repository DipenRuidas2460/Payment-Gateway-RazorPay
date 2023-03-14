const express = require('express')

const {checkout, paymentVarification} = require("../controllers/paymentController")

const router = express.Router()

router.post("/checkout", checkout)

router.post("/paymentVerification", paymentVarification)

module.exports = router;

