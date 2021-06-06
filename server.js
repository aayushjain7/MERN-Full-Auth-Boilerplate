require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
	fileUpload({
		useTempFiles: true,
	})
);

app.use('/user', userRouter);

mongoose.connect(
	process.env.MONGODB_URI,
	{
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) throw err;
		console.log('MongoDB Connected!');
	}
);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
	console.log('Server is running on port:', PORT);
});

process.on('unhandledRejection', (err, promise) => {
	console.log(`Logged Error: ${err}`);
	server.close(() => process.exit(1));
});
