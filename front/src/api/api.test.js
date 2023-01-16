const express = require("express");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const app = express();
app.get("/", (req, res) => res.send("Hello World!"));

describe("GET board", () => {
  it('should return "Hello World!"', (done) => {
    request(app)
      .get("/board")
      .end((err, res) => {
        expect(res.data).to.equal({ id: 1, content: "df" });
        done();
      });
  });
});
