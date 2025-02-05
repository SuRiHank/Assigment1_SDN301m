const express = require('express'),
    http = require('http');
const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');
// const bodyParser = require('body-parser');
const bookRouter = require('./routes/bookRouter');
const genreRouter = require('./routes/genreRouter');
const authorRouter = require('./routes/authorRouter');
const app = express();

app.use(morgan('dev'));

app.use('/books', bookRouter);
app.use('/genre', genreRouter);
app.use('/author', authorRouter);
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    // console.log(req.headers);
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
