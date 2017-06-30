// Load Express
var express = require('express');
// Create Express App
var app = express();

// Devine a root route directly on app
// Later, we will use the router object
app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>')
});

// Tell the app to listen on port 300
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
