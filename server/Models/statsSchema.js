const mongoose = require("mongoose"); 

const statsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        business: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        website: {
            type: String,
            required: true
        } ,
        instagram: {
            type: String,
            required: true
        }
    }
)
const stats = mongoose.model("stat",statsSchema); 

module.exports = stats; 