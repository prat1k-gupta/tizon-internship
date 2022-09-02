const mongoose = require("mongoose"); 

const statsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  businessname: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
  businessid: {
    type: "ObjectId",
    ref: "business",
  },
  userid: {
    type: "ObjectId",
    ref: "user",
  },
});
const stats = mongoose.model("stat",statsSchema); 

module.exports = stats; 