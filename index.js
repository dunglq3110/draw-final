const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("draw.ejs");
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

exports.PORT = PORT
