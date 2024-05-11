const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/authservice", proxy("http://localhost:5001"))
app.use("/courseservice", proxy("http://localhost:5002"))
app.use("/paymentservice", proxy("http://localhost:5003"))
app.use("/notificationservice", proxy("http://localhost:5004"))


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})



module.exports = app;