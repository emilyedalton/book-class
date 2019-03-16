const router = require("express").Router();
const bookRoutes = require("./books");

const googleRoutes = require("./google");
// Book routes
router.use("/books", bookRoutes);

// Emily, this part is where the utils-> appjs reference it as axis.get("api/google")
//Since api has been defined already at the root of routes->index.js
//we don't need to define again. we go to just /google
//  routes
router.use("/google", googleRoutes);

module.exports = router;
