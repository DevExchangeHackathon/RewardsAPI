var express = require('express')
var app = express()
// var bodyParser =  require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Rewards')
})

app.use('/rewards',require('./routes/app.js'),function(req,res){
  console.log('running api');
  next()
}, function (req,res,next){
  console.log('Request type:', req.method)
  next()
});



app.listen(3000);
console.log('listening 3000');
