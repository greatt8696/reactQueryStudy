const PAGE_CONTENTS_SIZE = 50;

const router = require("express").Router();

router.get("/board", async (req, res) => {
  return res.status(200).send("뀨");
});
router.put("/board", async (req, res) => {
  return res.status(200).send("뀨");
});
router.post("/board", async (req, res) => {
  return res.status(200).send("뀨");
});
router.delete("/board", async (req, res) => {
  return res.status(200).send("뀨");
});

module.exports = router;
