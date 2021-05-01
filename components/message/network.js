const express =require('express')
const multer=require('multer')
const response =require('../../network/response')
const controller=require('./controller')
const router =express.Router()//router nos permite
//separar cabeceras, metodos , url, serarpar peticiones

const upload=multer({
    dest:'uploads/',
})

router.get('/',(req,res)=>{

    const filterMessages=req.query.user||null;
    controller.getMessages(filterMessages)
    .then((messageList)=>{
        response.success(req,res,messageList,200)
    })
    .catch((err)=>{
        response.error(req,res,"Unexpected error",500,err)
    })
})

router.post('/',upload.single('file'),function(req,res){

    controller.addMessage(req.body.user,req.body.user,req.body.message)
    .then((fullMessage)=>{
        response.success(req,res,fullMessage,201)
        
    })
    .catch(e=>{
        response.error(req,res,'informacion invalida',400,'Error internooo')

    })

})
router.patch('/:id',(req,res)=>{


    console.log(req.params.id);

    console.log(req.body.message);

    controller.updateMessage(req.params.id,req.body.message)
    .then((data)=>{
        response.success(req,res,data,200)
        
    })
    .catch(e=>{
        response.error(req,res,'informacion invalida',400,'Error internooo')

    })

   // res.send('ok')
})

router.delete('/:id',(req,res)=>{

    controller.deleteMessage(req.params.id)
    .then(()=>{
        response.success(req,res,`Usuerio ${req.params.id} eliminado`,200)
        
    })
    .catch(e=>{
        response.error(req,res,'Error interno',500,'Error internooo')

    })

   // res.send('ok')
})
module.exports=router;