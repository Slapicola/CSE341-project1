const router = require("express").Router();

router.use("/", require("./swagger"));
router.get("/", (req, res) => {
  //#swagger.tags=["Go test your routes, silly! :)"]
  res.send("Go test your routes, silly! :)");
});

router.use("/contacts", require("./contacts"));

module.exports = router;
