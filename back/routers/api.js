const router = require("express").Router();

const { initBoard } = require("../dummyDatas/boardData.js");

router.get("/board", async (req, res) => {
  setTimeout(() => {
    return res.status(200).send(initBoard);
  }, 2000);
});

router.get("/board/:id", async (req, res) => {
  const { id } = req.params;
  console.log("/board/:id 응답 : " +initBoard[id]);
  setTimeout(() => {
    return res.status(200).send(initBoard[id]);
  }, 1500);
});

router.post("/board", async (req, res) => {
  return res.status(200).send("뀨");
});

router.put("/board", async (req, res) => {
  return res.status(200).send("뀨");
});

router.delete("/board", async (req, res) => {
  return res.status(200).send("뀨");
});

router.get("/error", async (req, res) => {
  setTimeout(() => {
    return res.status(405).send("뀨");
  }, 200);
});

module.exports = router;
