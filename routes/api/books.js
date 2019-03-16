const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
// "this route is working"
  .get(booksController.findAll)
  // .post(booksController.create);
  router.route("/saved")
  .get(booksController.findAll)

  router.route("/google")
    .get(booksController.create)
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);
  

module.exports = router;
