const mongoose = require('mongoose');

const StudentModelSchema = new mongoose.Schema ({
	year: String,
	dorm: String,
	room_number: String,
	course: String,
	geolocation: String,
	grade: String,
});

module.exports = mongoose.model('StudentModel', StudentModelSchema);