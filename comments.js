// Create web server
// Create a new express server
const express = require('express');
const app = express();
// Use body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Use the comments router
const commentsRouter = require('./commentsRouter');
app.use('/comments', commentsRouter);
// Start the server
app.listen(4001, () => {
  console.log('Your server is listening on port 4001...');
});