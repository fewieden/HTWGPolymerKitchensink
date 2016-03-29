/**
 * Created by fw on 29.03.16.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);

require('./router/router.js')(app);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

var server = http.listen(9000, function(){
    console.log('Server listening on port 9000.');
});