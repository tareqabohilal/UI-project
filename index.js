const express = require("express");
const liveReload = require("livereload");
const connectLiveReload = require("connect-livereload");
const path = require("path");
const port = 4012;
const server = express();
const liveReloadServer = liveReload.createServer();
server.use(connectLiveReload());
console.log(__dirname);
server.use(express.static(path.join(__dirname, "dist")));
liveReloadServer.watch(path.join(__dirname, "dist"));
server.listen(port, function () {
  console.log(`server is listening to the port: ${port}`);
});