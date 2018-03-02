const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

var xxx = express();
xxx.use(express.static(path.join(__dirname, 'public')));
var bodyParser = require('body-parser');
xxx.use( bodyParser.json() );
xxx.use(bodyParser.urlencoded({
    extended: true
}));
xxx.get('/', function(req,res){res.render('index.html')});

xxx.listen(PORT,function(){ console.log(`Listening on ${ PORT }`)});