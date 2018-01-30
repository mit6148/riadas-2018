const mongoose = require("mongoose");
require('dotenv').config();
const mongoURL = process.env.MLAB_URL;
const options = { };

// connects to MongoDB
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise; // <- will explain what this is next week
const dbConnection = mongoose.connection;
// error handler
dbConnection.on('error', console.error.bind(console, 'connection error:'));
// optional: run when connection is successful
dbConnection.on('connected', function() {
      console.log('database connected');
});