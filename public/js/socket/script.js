const PORT = window.location.port;

const socket = io.connect(`http://localhost:${PORT}`);

socket.on("connect", () => {
	console.log(`Connected with ID: ${socket.id}`);
});

let paperCanvas = document.getElementById("paperCanvas");

paperCanvas.addEventListener("mouseup", (e) => {
	let jsonString = {};

	jsonString = paper.project.exportJSON({ asString: true });

	socket.emit("send-mouseup", jsonString);
});

socket.on("receive-mouseup", (jsonString) => {
	const activeLayerID = paper.project.activeLayer.data.id;

	paper.project.clear();

	paper.project.importJSON(jsonString);

	pg.layer.reinitLayers(activeLayerID);
});
