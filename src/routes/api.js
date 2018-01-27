// dependencies
const express = require('express');

// models
const Student = require('../models/student');

const exampleStudent = new Student({
  'year' : '2016',
  'dorm' : 'Burton Conner',
  'room_number' : '512C',
  'course' : '6',
  'geolocation' : 'New Hampshire',
  'grade' : '1'
})

exampleStudent.save();

const router = express.Router();

// api endpoints

 router.get('/roomhistory', function(req, res) {
  Student.find({ dorm : req.query.dorm, room_number : req.query.room_number}, function(err, roomhistory) {
    res.send(roomhistory);
  });
});

module.exports = router;