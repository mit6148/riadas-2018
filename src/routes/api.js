// dependencies
const express = require('express');

// models
const Student = require('../models/student');
/*
const exampleStudent = new Student({
  'year' : '2016',
  'dorm' : 'Burton Conner',
  'room_number' : '512C',
  'course' : '6',
  'geolocation' : 'New Hampshire',
  'grade' : '1'
})

const exampleStudent2 = new Student({
  'year' : '2016',
  'dorm' : 'Burton Conner',
  'room_number' : '512C',
  'course' : '8',
  'geolocation' : 'New Hampshire',
  'grade' : '1'
})

exampleStudent.save();
exampleStudent2.save();


const exampleStudent2 = new Student({
  'year' : '2015',
  'dorm' : 'Burton Conner',
  'room_number' : '512C',
  'course' : '9',
  'geolocation' : 'New Hampshire',
  'grade' : '1'
})

exampleStudent2.save();
*/


Student.find({ dorm : '500 Memorial Dr', year : 2002}, function(err, studentArr) {
  for (var i = 0; i < studentArr.length; i++) {
    studentArr[i].year = '2002';
    studentArr[i].save();

  }
});

const router = express.Router();

// api endpoints

 router.get('/roomhistory', function(req, res) {
  Student.find({ dorm : req.query.dorm, room_number : req.query.room_number}, function(err, roomhistory) {
    res.send(roomhistory);
  });
});

module.exports = router;