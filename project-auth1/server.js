require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const authRouter = require("./routes/auth");
const privateRouter = require("./routes/private");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/private", privateRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
/* 
const server = app.listen(PORT, () =>
	console.log(`Server running at port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
	console.log(`Logged Error: ${err}`);
	server.close(() => process.exit(1));
});
 */
