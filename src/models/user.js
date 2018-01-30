const mongoose = require('mongoose');

const UserModelSchema = new mongoose.Schema ({
	name: String,
	fbid: String,
	dorm: String,
	room: String,
	searchHistory: Array
});

module.exports = mongoose.model('UserModel', UserModelSchema);