const Country = require("../../../models/country");

const countriesController = async (req, res) => {
  try {
    const { fields } = req.query;
    const fieldArray = fields
      ? fields.split(",").map((field) => field.trim())
      : [];
    const data = await Country.find().select(
      fieldArray.length > 0 ? fieldArray : null
    );
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const countryController = async (req, res) => {
  try {
    const { fields } = req.query;
    const fieldArray = fields
      ? fields.split(",").map((field) => field.trim())
      : [];

    const data = await Country.findOne({ iso2: req.params.iso2 }).select(
      fieldArray.length > 0 ? fieldArray : null
    );

    if (data) {
      res.status(200).json(data);
    } else {
      res
        .status(404)
        .json({ error: "Country not found", iso2: req.params.iso2 });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { countriesController, countryController };
