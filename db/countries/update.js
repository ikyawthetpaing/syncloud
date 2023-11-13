const path = require("path");
const { connectDatabase } = require("../connect");
const { readJsonFile } = require("../../lib/utils");
const Country = require("../../models/country");

const updateCountriesData = async (uri) => {
  try {
    await connectDatabase(uri);

    const data = await readJsonFile(path.join(__dirname, "data.json"));

    if (!data || !data.countries || !Array.isArray(data.countries)) {
      throw new Error("Invalid or missing data in the JSON file.");
    }

    for (let country of data.countries) {
      const existingCountry = await Country.findOne({ iso2: country.iso2 });

      if (existingCountry) {
        existingCountry.set(country);
        await existingCountry.save();
        console.log(
          `${country.name} data successfully updated in the database`
        );
      } else {
        await Country.create(country);
        console.log(
          `${country.name} data successfully inserted into the database`
        );
      }
    }

    console.log("Data successfully inserted or updated in the database");
  } catch (error) {
    console.error("Error connecting to MongoDB or inserting data:", error);
  } finally {
    mongoose.connection.close();
  }
};

module.exports = { updateCountriesData };
