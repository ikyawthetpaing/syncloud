const fsPromises = require("fs").promises;

const readJsonFile = async (path) => {
  try {
    const rawData = await fsPromises.readFile(path, "utf8");
    const data = JSON.parse(rawData);
    return data;
  } catch (err) {
    console.error("Error reading/parsing JSON:", err);
    throw err;
  }
};

module.exports = { getAbsolutePath, readJsonFile };
