var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('landing')
})

app.get('/:time', function(req, res) {
  var time = req.params.time
  var obj = {'unix': null, 'natural': null}
  res.send(obj)
})

app.get('*', function(req, res) {
  res.send('You are in the wrong path!')
})


app.listen(3000, function() {
  console.log('The server has started!')
})