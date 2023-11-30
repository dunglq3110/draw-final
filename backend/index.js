const CLIENT_PORT = 8080;
const SERVER_PORT = 3000;

const io = require("socket.io")(SERVER_PORT, {
	cors: {
		origin: [`http://localhost:${CLIENT_PORT}`],
	},
});

io.on("connection", (socket) => {
	console.log(`${new Date().toLocaleTimeString()}: ` + socket.id);

	// socket.on("send-message", (message, room) => {
	// 	if (room === "") {
	// 		socket.broadcast.emit("receive-message", message);
	// 	} else {
	// 		socket.to(room).emit("receive-message", message);
	// 	}
	// });

	// socket.on("join-room", (room) => {
	// 	socket.join(room);
	// });
});
