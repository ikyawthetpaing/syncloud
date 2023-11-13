const fs = require("fs");
const fsPromises = require("fs").promises;

// const getAbsolutePath = (path = "") => {
//   try {
//     console.log("Current working directory:", process.cwd());

//     return path
//       ? fs.realpathSync(process.cwd() + path)
//       : fs.realpathSync(process.cwd());
//   } catch (err) {
//     console.log(`Error getting absolute path: ${err.message}`);
//     throw err;
//   }
// };
const getAbsolutePath = (path = "") => {
  try {
    if (path.startsWith("/")) {
      path = path.replace("/", "");
    }

    const absolutePath = path ? fs.realpathSync(path) : process.cwd();

    // Check if the directory exists
    if (!fs.existsSync(absolutePath)) {
      console.error(`Directory does not exist: ${absolutePath}`);
      throw new Error("Directory does not exist");
    }

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
