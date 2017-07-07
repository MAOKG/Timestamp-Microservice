var express = require('express')
var app = express()
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('landing')
})

app.get('/:time', function(req, res) {
  var time = req.params.time
  if (!isNaN(Number(time))) {
    time = Number(time)*1000
  }
  var obj = {'unix': null, 'natural': null}
  var date = new Date(time)
  if (!isNaN(date.getTime())) {
    obj.unix = date.getTime()/1000
    obj.natural = month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
  }
  res.send(obj)
})

app.get('*', function(req, res) {
  res.send('You are in the wrong path!')
})


app.listen(3000, function() {
  console.log('The server has started!')
})