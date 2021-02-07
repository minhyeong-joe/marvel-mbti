const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 80;

mongoose.connect(process.env.DB_URL, {
	useFindAndModify: false,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useNewUrlParser: true,
});
mongoose.connection.on("connected", () => console.log("connected to database"));
mongoose.connection.on("error", (err) =>
	console.log("DB connection error: " + err)
);

const app = express();
app.use(cors());

console.log(__dirname);
app.use(express.static(path.join(__dirname, "../build")));

app.use(bodyParser.json());

const participantRoute = require("./routes/participant");
app.use("/statistics", participantRoute);

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});
