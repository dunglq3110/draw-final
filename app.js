require("dotenv").config();
const PORT = process.env.PORT || 3000;

const express = require("express");

const http = require("http");

const app = express();
const path = require("path");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
	res.render("./draw.ejs");
});

const server = http.Server(app);
const io = require("socket.io")(server);

io.on("connection", function (socket) {
	console.log("a user connected: " + socket.id);

	socket.on("disconnect", function () {
		console.log("user disconnected: " + socket.id);
	});

	socket.on("send-mouseup", (jsonString) => {
		socket.broadcast.emit("receive-mouseup", jsonString);
	});

	socket.on("timeout-send", (jsonString) => {
		socket.broadcast.emit("timeout-receive", jsonString);
	});
});

server.listen(PORT, () => {
	console.log("Server listening at port: " + PORT);
});
