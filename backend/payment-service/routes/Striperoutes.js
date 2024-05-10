const express =require("express");
const { createPayment, getAllPayment } = require("../controller/PaymentController");
const router = express.Router();


router.post("/:cid/:uid/:amount",createPayment);
router.get("/",getAllPayment);
router.get("/:uid",getAllPayment);


module.exports = router;