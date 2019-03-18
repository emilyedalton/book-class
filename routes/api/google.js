const router = require("express").Router();
const googleController = require("../../controllers/googleController");


router.route("/")
.get(googleController.googleFindAll)

module.exports = router;
