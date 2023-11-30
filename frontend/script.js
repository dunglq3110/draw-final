const SERVER_PORT = 3000;

const socket = io(`http://localhost:${SERVER_PORT}`);

socket.on("connect", () => {
	console.log(`Connected with ID: ${socket.id}`);
});
