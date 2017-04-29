var http = require('http');
var express = require('express');
var cors = require('cors');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
//var api = require('./api');


let app = express();
app.server = http.createServer(app);

//serve static files from the public folder
app.use(express.static('assets'));

// logger
app.use(morgan('dev'));


app.use(bodyParser.json({
	limit : '100kb'
}));

// api router
//app.use('/api', api({ config, db }));

//controller - views router
app.get('/api/data', (req, res) => {
	res.json('It worked!!!!')
})
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.server.listen(process.env.PORT || 8080);

console.log(`Started on port ${app.server.address().port}`);

module.exports=app;
