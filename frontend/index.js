// const dotenv = require("dotenv");
// const { cleanEnv, port } = require("envalid");
// const express = require("express");
// const app = express();
// const path = require("path");

// dotenv.config({ path: "../.env" });

// const env = cleanEnv(process.env, {
// 	CLIENT_PORT: port(),
// });

// app.set("views", "./views");
// app.set("view engine", "ejs");

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
// 	res.render("draw.ejs");
// });

// app.listen(env.CLIENT_PORT, () => {
// 	console.log(`Application listening on port ${env.CLIENT_PORT}`);
// });
