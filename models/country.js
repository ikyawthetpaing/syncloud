const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  iso2: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  flag: {
    type: String,
    required: true,
  },
  states: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      state_code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true,
      },
      cities: [
        {
          name: {
            type: String,
            required: true,
            trim: true,
          },
        },
      ],
    },
  ],
});

const Country = mongoose.model("Country", countrySchema, "countries");

module.exports = Country;
