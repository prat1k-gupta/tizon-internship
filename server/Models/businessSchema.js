const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    businessname: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: false,
    },
    linkedin: {
      type: String,
      required: false,
    },
    facebook: {
      type: String,
      required: false,
    },
    twitter: {
      type: String,
      required: false,
    },
    pics: [
      {
        type: String,
        required: false,
      },
    ],
    ytlinks: [
      {
        link: {
          type: String,
        },
      },
    ],
    userid: {
      type: "ObjectId",
      ref: "user",
    }
  },
  {
    timestamps: true,
  }
);

const business = mongoose.model("business", businessSchema);

module.exports = business;
