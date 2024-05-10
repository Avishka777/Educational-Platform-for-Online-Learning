const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const Striperoutes = require("./routes/Striperoutes")

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/stripe", Striperoutes);

const PORT = process.env.PORT || 5003;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () =>{
            console.log(`Server Running is port ${PORT} 🚀 `);
        })
    })
    .catch((err)=>console.log(err))