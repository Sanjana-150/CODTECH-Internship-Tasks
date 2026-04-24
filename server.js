const open = require("open");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("text-change", (data) => {
        socket.broadcast.emit("text-change", data);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

const { exec } = require("child_process");

server.listen(1000, () => {
    console.log("Server running on http://localhost:1000");
    exec("start http://localhost:1000");
});
