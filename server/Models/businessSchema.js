const mongoose = require('mongoose')

const businessSchema = new mongoose.Schema(
    {
        businessname: {
            type: String,
            required: true
        }, 
        website: {
            type: String,
            required: true
        },      
        description: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        instagram: {
            type: String,
            required: true
        },
        linkedin: {
            type: String,
            required: true
        },
        facebook: {
            type: String,
            required: true
        },
        twitter: {
            type: String,
            required: true
        },
        pics: [
            {
            type: String,
            required: false
            }
        ],
        ytlinks: [{
            type: String,
            required: false
        }]
    },
    {
        timestamps: true
    }
)

const business = mongoose.model("business",businessSchema); 

module.exports = business; 