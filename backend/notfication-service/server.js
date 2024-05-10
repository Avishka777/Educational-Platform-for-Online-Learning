const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dotenv = require("dotenv");

const NotificationRoutes =require("./routes/AnnousementRoutes")

dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/notification", NotificationRoutes);

const PORT = process.env.PORT || 5004;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () =>{
            console.log(`Server Running is port ${PORT} 🚀 `);
        })
    })
    .catch((err)=>console.log(err))