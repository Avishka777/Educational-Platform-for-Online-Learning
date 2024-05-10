const mongoose = require("mongoose");

const AnnousementSchema= mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        annousement: {
            type: String,
            required: true
        },
        category: {
            type: Number
        },
    },
    {
        timestamps: true
    }
);






const Notfication = mongoose.model("notfications",AnnousementSchema)

module.exports = Notfication;
