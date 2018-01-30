// dependencies
const express = require('express');
const router = express.Router();

// public endpoints
router.get('/', function(req, res, next) {
  res.sendFile('room.html', { root: 'src/views' });
});

router.get('/dorm.html', function(req, res) {
	res.sendFile('dorm.html', { root : 'src/views'});
});

router.get('/home.html', function(req, res) {
	res.sendFile('home.html', { root : 'src/views'});
});

module.exports = router;