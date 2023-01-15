const { initBoard } = require("../dummyDatas/boardData.js");
const { initUser } = require("../dummyDatas/userData.js");

/**
 * @type
 */

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

  getDataById = (inputName, inputIdx) => {
    const schemes = this.schemes.find(({ name }) => name === inputName);
    // console.log(schemes);
    return schemes.data[inputIdx];
  };

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

  updateData = (inputName, inputData) => {
    const schemes = this.schemes.find(({ name }) => name === inputName);
    const newData = inputData.data;
    const prevData = schemes.data;
    const updatedData = prevData.map((data) =>
      { 
        console.log(`data.id ${data.id}  newData.id ${newData.id} ${data.id === newData.id}`); 
        return `${data.id}` === `${newData.id}` ? newData : data}
    );
    console.log(updatedData);
    console.log(newData);
    this.schemes = this.schemes.map((scheme) =>
      scheme.name === inputName ? { ...scheme, data: updatedData } : scheme
    );
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

  compareData = (inputName, inputId) => {
    const schemes = this.schemes.findIdx(({ name }) => name === inputName);
    const prevData = schemes.data;
    const deletedData = prevData.filter(({ id }) => id !== inputId);
    this.schemes = this.schemes.map((scheme) => {
      return scheme.name === inputName
        ? { ...scheme, data: deletedData }
        : scheme;
    });
  };
}

const dbService = new DbService([
  { name: "board", data: initBoard },
  { name: "user", data: initUser },
  // { name: "board2", data: initBoard },
  // { name: "board3", data: initBoard },
]);

// console.log(dbService.getDataById("board", 49));
/*
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

module.exports = { dbService };
