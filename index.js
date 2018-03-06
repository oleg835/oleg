const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});
var xxx = express();
xxx.use(express.static(path.join(__dirname, 'public')));
var bodyParser = require('body-parser');
xxx.use( bodyParser.json() );
xxx.use(bodyParser.urlencoded({
    extended: true
}));
xxx.get('/', function(req,res){res.render('index.html')});

xxx.listen(5000, function(){
    console.log('listening on *:5000');
});