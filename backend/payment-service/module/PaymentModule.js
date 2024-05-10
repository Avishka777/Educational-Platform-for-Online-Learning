const mongoose = require("mongoose");

const PaymentSchema= mongoose.Schema(
    {
        userid: {
            type: String,
            required: true
        },
        courseid: {
            type: String,
            required: true
        },
        amount: {
            type: Number
        },
        payemail:{
            type:String
        }
    },
    {
        timestamps: true
    }
);






const Payment = mongoose.model("payments",PaymentSchema)

module.exports = Payment;
