const router = require("express").Router();

const { dbService } = require("../service/dbService");

/* dbService 예시

dbService.addData("board", {
  title: "#47 제목",
  content: "#47 내용",
  writer: "#47 죠르디",
  view: 0,
});

dbService.updateData("board", {
  id : 49
  title: "#49 제목",
  content: "#49 내용수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정",
  writer: "#49 죠르디",
  view: 0,
});

console.log(dbService.deleteDataById("board", 49));

console.log(dbService.getAllScheme("board"));

console.log(dbService.getAutoIncreasementIdx("board"));

*/

router.get("/board", async (req, res) => {
  setTimeout(() => {
    return res.status(200).send(dbService.getAllScheme("board"));
  }, 2000);
});

router.get("/board/:id", async (req, res) => {
  const { id } = req.params;
  setTimeout(() => {
    console.log(
      "get-/board/:id 응답 : " + JSON.stringify(dbService.getDataById("board",id))
    );
    return res.status(200).send(dbService.getDataById("board",id));
  }, 1500);
});

router.delete("/board", async (req, res) => {
  dbService.deleteDataById("board",id)
  return res.status(200).send(true);
});

router.put("/board/:id", async (req, res) => {

  console.log(
    "put-/board/:id 응답 : " + JSON.stringify(dbService.getDataById("board",id))
  );
  return res.status(200).send("뀨");
});

router.delete("/board", async (req, res) => {
  return res.status(200).send("뀨");
});

router.get("/error", async (req, res) => {
  setTimeout(() => {
    return res.status(404).send("뀨");
  }, 200);
});

module.exports = router;
