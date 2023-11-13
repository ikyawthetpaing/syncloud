const fsPromises = require("fs").promises;
const path = require("path");

const getAbsolutePath = (relativePath = "") => {
  try {
    if (relativePath.startsWith("/")) {
      relativePath = relativePath.replace("/", "");
    }

    const absolutePath = path.resolve(__dirname, "../", relativePath);
    return absolutePath;
  } catch (err) {
    console.log(`Error getting absolute path: ${err.message}`);
    throw err;
  }
};

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
