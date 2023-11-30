const SERVER_PORT = 3000;

const socket = io(`http://localhost:${SERVER_PORT}`);

socket.on("connect", () => {
	console.log(socket.id);
});

