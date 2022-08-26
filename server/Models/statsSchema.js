const mongoose = require("mongoose"); 

const statsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  businessname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  userid: {
    type: "ObjectId",
    ref: "user",
  },
});
const stats = mongoose.model("stat",statsSchema); 

module.exports = stats; 