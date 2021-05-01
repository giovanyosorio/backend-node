const db=require('mongoose')
//const list =[]

db.Promise = global.Promise;

async function connect(url){
   await db.connect(url,{
        useNewUrlParser:true
    })
    console.log('db conectada');
}


module.exports=connect