const express = require("express");
const router = express.Router();

router.get(
  "/countries",
  require("../../../controllers/api/v1/countries").countriesController
);

router.get(
  "/countries/:iso2",
  require("../../../controllers/api/v1/countries").countryController
);

module.exports = router;
