const express =require('express')
const app=express()
const server=require('http').Server(app);


const bodyParser=require('body-parser')
const response =require('./network/response')
const db=require('./db')
//const router=require('./components/message/network')
const router=require('./network/routes')

db('mongodb+srv://go:e3b3b8454@cluster0.3waul.mongodb.net/telegram')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//app.use(router);

router(app);

app.use('/app',express.static('public'))

server.listen(8080,function () {
    
    console.log('app listening  en http://localhost:8000')
})
