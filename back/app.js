require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const api = require("./routers/api");
const { SERVER_PORT } = process.env;

app.use(cors({ origin: "*", credentials: false }));

app.use(express.static("public"));

app.listen(SERVER_PORT, () => console.log("SERVER RUNNING :", SERVER_PORT));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api", api);
