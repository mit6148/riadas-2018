const mongoose = require("mongoose");
const mongoURL = "mongodb://riadas:MITdemoapp@ds213338.mlab.com:13338/mitdemographics-db";
const options = { useMongoClient: true };

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