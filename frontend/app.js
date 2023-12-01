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

app.use(notFoundHandler);
app.use(errorHandler);

function notFoundHandler(req, res, next) {
	let err = new Error("Not Found");
	err.status = 404;
	next(err);
}

function errorHandler(err, req, res, next) {
	res.status(err.status || 500);
	res.render("error", { error: err, errorStatus: err.status });
}

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
});

server.listen(PORT, () => {
	console.log("Server listening at port: " + PORT);
});

// exports.PORT = PORT;
