const DATA_SIZE = 500;

const userObj = {
  id: 0,
  email: "죠르디@gmail.com",
  nickname: "닉네임",
  rank: "죠르디사육사",
  password: "1",
};

const initUser = Array(DATA_SIZE)
  .fill()
  .map((_, idx) => {
    const newData = { ...userObj };

    newData.id = idx;
    newData.email = `#${idx} ${userObj.email}`;
    newData.nickname = `#${idx} ${userObj.nickname}`;
    newData.rank = `#${idx} ${userObj.rank}`;
    newData.password = userObj.password;

    return newData; 
  });

module.exports = { initUser };
