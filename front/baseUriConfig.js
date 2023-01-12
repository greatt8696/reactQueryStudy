const selectURI = (location) =>
  "집" === location ? "localhost" : "192.168.0.116";

const baseUriConfig = selectURI("학원")

export {baseUriConfig};
