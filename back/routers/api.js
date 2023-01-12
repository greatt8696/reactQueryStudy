const PAGE_CONTENTS_SIZE = 50;

const router = require("express").Router();

router.get("/post", async (req, res) => {
  return res.status(200).send("뀨");
});
router.put("/post", async (req, res) => {
  return res.status(200).send("뀨");
});
router.post("/post", async (req, res) => {
  return res.status(200).send("뀨");
});
router.delete("/post", async (req, res) => {
  return res.status(200).send("뀨");
});

module.exports = router;
