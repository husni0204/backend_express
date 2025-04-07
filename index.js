const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');

const app = express();

//use cors
app.use(cors());

//use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

const port = 3000;

//route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//define routes
app.use('/api', router);

// route to server upload files (if needed)
app.get('/uploads/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', req.params.filename));
});

//start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
