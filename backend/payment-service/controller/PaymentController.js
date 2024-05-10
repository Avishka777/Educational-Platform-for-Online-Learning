const asyncHandler = require("express-async-handler");
const Payment = require("../module/PaymentModule");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const createPayment =asyncHandler (async(req,res)=>{
    try{
        const uid = req.body.userid;
        const cid = req.body.courseid;
        const amount = req.body.amount;
        const phone = req.body.phone

        stripe.charges.create(
            {
              source: req.body.tokenId,
              amount: req.body.amount,
              currency: "usd",
              receipt_email: req.body.email,
      
            },
            (stripeErr, stripeRes) => {
              if (stripeErr) {
                res.status(500).json(stripeErr);
              } else {
                res.status(200).json(stripeRes);
              }
            }
          );


        const  payment = await Payment.create({
            userid:uid,
            courseid:cid,
            amount:amount,
            payemail:req.body.email
        })

        client.messages
        .create({
            body: `You are Enrolled ${cid}`,
            from: '+12076721160',
            to: `+94${phone}` 
        })
        .then(message => console.log(message.sid))
        .done();

        res.status(201).json(payment);
        

    }catch (error) {
        console.error("Error occour paying:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


const getAllPayment = asyncHandler(async(req,res)=>{
    try{
        const payment = await Payment.find();

        res.status(200).json(payment)

    }catch (error) {
        console.error("Error occour getiing payment details", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


const getPaymentByUserId = asyncHandler(async(req,res)=>{
    try{
        const payment = await Payment.find({userid:req.params.uid});

        res.status(200).json(payment)

    }catch (error) {
        console.error("Error occour getiing payment details:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})



module.exports ={
    createPayment,
    getAllPayment,
    getPaymentByUserId

}