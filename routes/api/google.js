const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Emily, this is the endpoint of Google applicationCache, it needs to be in a separate file
//The whole url path is formulated here since the / is the endpoint.
//Now it formed /api/google/api which is the right path when util->app.sj calls initially

router.route("/")
.get(googleController.googleFindAll)

module.exports = router;
