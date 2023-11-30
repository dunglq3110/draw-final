const dotenv = require("dotenv");
const { port, cleanEnv } = require("envalid");

dotenv.config({ path: __dirname + "/./../.env" });
const env = cleanEnv(process.env, {
	CLIENT_PORT: port(),
	SERVER_PORT: port(),
});

const io = require("socket.io")(env.SERVER_PORT, {
	cors: {
		origin: [`http://localhost:${env.CLIENT_PORT}`],
	},
});

io.on("connection", (socket) => {
	console.log(`${new Date().toLocaleTimeString()}: ${socket.id}`);

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
