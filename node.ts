// import fs = require("fs");
import fs from "fs";
// import http = require("http");
import http from "http";
// import path = require("path");
import path from "path";

http
  .createServer((req, res) => {
    const number = setTimeout(() => {
      console.log("hello");
    });
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080, () => {
    console.log("서버 시작됨");
  });
