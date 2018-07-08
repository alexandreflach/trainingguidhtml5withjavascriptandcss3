var express = require('express'); 
var app = express();
var formidable = require('formidable');
var math = require('math_example');

app.use(express.static(__dirname + '/public'));


app.get('/addition', function(request, response){
    var x = Number(request.query.x),
        y = Number(request.query.y),
        result = math.addition(x, y);

        response.writeHead(200, { 'Content-Type' : 'text/html'});
        response.end('{ "result": ' + result + '}');
});

var port = 8080;
app.listen(port);
console.log('Listening on por: ' + port);