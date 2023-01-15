const DATA_SIZE = 50;

const boardObj = {
  id: 0,
  title: "제목",
  content: "내용",
  writer: "죠르디",
  view: 0,
  
};

const initBoard = Array(DATA_SIZE)
  .fill()
  .map((_, idx) => {
    const newData = { ...boardObj };

    newData.id = idx;
    newData.title = `#${idx} ${boardObj.title}`;
    newData.content = `#${idx} ${boardObj.content}`;
    newData.writer = `#${idx} ${boardObj.writer}`;
    newData.view = 0;

    return newData;
  });

module.exports = { initBoard };
