const { Router } = require("express");
const router = Router();

router.use("/user", require("./User"));
router.use("/post", require("./Post"));
module.exports = router;
