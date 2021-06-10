const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter your name!'],
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'Please enter your email!'],
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please enter your password!'],
		},
		role: {
			type: Number,
			default: 0,
		},
		avatar: {
			type: String,
			default: 'https://res.cloudinary.com/aayushjain7/image/upload/v1622895313/thumb_15951118880user_opqvts.png',
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Users', userSchema);
