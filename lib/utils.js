const fs = require("fs");
const fsPromises = require("fs").promises;

class FileError extends Error {
  constructor(message) {
    super(message);
    this.name = "FileError";
  }
}

const getAbsolutePath = (path = "") => {
  try {
    return path
      ? fs.realpathSync(process.cwd() + path)
      : fs.realpathSync(process.cwd());
  } catch (err) {
    throw new FileError(`Error getting absolute path: ${err.message}`);
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

module.exports = { getAbsolutePath, readJsonFile, FileError };
