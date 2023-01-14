const { initBoard } = require("../dummyDatas/boardData.js");

class DbService {
  /**
   * @param {Object} init
   */
  constructor(init) {
    this.schemes = init;
    this.autoIncreasements = this.schemes.map(({ name, data }) => {
      return { name: name, autoIncreasement: data.length };
    });
  }

  getAllScheme = (inputName) =>
    this.schemes.find(({ name }) => name === inputName);

  getAutoIncreasementIdx = (inputName) =>
    this.autoIncreasements.find(({ name }) => name === inputName)
      .autoIncreasement;

  addData = (inputName, inputData) => {
    const schemes = this.schemes.find(({ name }) => name === inputName);
    const prevData = schemes.data;
    const newData = [
      ...prevData,
      { ...inputData, id: this.getAutoIncreasementIdx(inputName) },
    ];
    this.schemes = this.schemes.map((scheme) => {
      return scheme.name === inputName ? { ...scheme, data: newData } : scheme;
    });
  };

  deleteDataById = (inputName, inputId) => {
    const schemes = this.schemes.find(({ name }) => name === inputName);
    const prevData = schemes.data;
    const deletedData = prevData.filter(({ id }) => id !== inputId);
    this.schemes = this.schemes.map((scheme) => {
      return scheme.name === inputName
        ? { ...scheme, data: deletedData }
        : scheme;
    });
  };
}

const dbService = new DbService([{ name: "board", data: initBoard }]);

/*
dbService.addData("board", {
  title: "#47 제목",
  content: "#47 내용",
  writer: "#47 죠르디",
  view: 0,
});
console.log(dbService.deleteDataById("board", 49));
console.log(dbService.deleteDataById("board", 48));
console.log(dbService.deleteDataById("board", 49));
console.log(dbService.getAllScheme("board"));
console.log(dbService.getAutoIncreasementIdx("board"));
*/

module.exports = { dbService };
