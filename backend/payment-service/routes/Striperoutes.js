const express =require("express");
const { createPayment, getAllPayment, getPaymentByUserId } = require("../controller/PaymentController");
const router = express.Router();


router.post("/:cid/:uid/:amount",createPayment);
// router.post("/payment",createPayment);

router.get("/",getAllPayment);
router.get("/:uid",getPaymentByUserId);


module.exports = router;