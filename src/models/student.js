const mongoose = require('mongoose');

const StudentModelSchema = new mongoose.Schema ({
	dorm: String,
	floor: String,
	room_number: String,
	course: Number,
	geolocation: String,
	year: Number,
});

module.exports = mongoose.model('StudentModel', StudentModelSchema);