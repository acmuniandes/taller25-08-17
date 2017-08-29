var express = require('express')
var app = express()



var personas = ['ignacio', 'laura', 'julian']


app.get('/',function(req, res){
  console.log('me pidieron /')
  res.send('me estas pidiendo /')
})



app.get('/home',function(req, res){
  console.log('me pidieron /home')
  res.sendFile(__dirname + '/index.html')
})

app.get('/home/otra',function(req, res){
  console.log('me pidieron /home/otra')
  res.send('aqui estoy')
})

app.get('/personas',function(req, res){
  res.send(personas)
})


app.post('/personas/:alguien', function(req,res){
  console.log('me agregaron a ' + req.params.alguien)
  console.log(personas)
  personas.push( req.params.alguien )
  res.send( personas )
  console.log(personas)
})












app.listen(8080, function(){
  console.log('el servidor esta funcionando en el puerto 8080')
})
