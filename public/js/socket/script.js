const PORT = window.location.port;

const socket = io.connect(`http://localhost:${PORT}`);

socket.on("connect", () => {
	console.log(`Connected with ID: ${socket.id}`);
});

let paperCanvas = document.getElementById("paperCanvas");

paperCanvas.addEventListener("frame", (e) => {
	console.log("Mouse moved");
});

paperCanvas.addEventListener("mouseup", (e) => {
	let jsonString = {};

	jsonString = paper.project.exportJSON({ asString: true });

	socket.emit("send-mouseup", jsonString);
});

document.querySelector("canvas").on = () => {
	// 	let jsonString = {};

	// 	jsonString = paper.project.exportJSON({ asString: true });

	// 	socket.emit("send-mouseup", jsonString);
	console.log("Hello");
};

socket.on("receive-mouseup", (jsonString) => {
	const activeLayerID = paper.project.activeLayer.data.id;
	paper.project.clear();
	pg.export.setExportRect();

	paper.project.importJSON(jsonString);

	pg.layer.reinitLayers(activeLayerID);
	const exportRect = pg.guides.getExportRectGuide();
	if (exportRect) {
		pg.export.setExportRect(new paper.Rectangle(exportRect.data.exportRectBounds));
	}
});
