const store=require('./store')

function addMessage(user,message,chat) {
    return new Promise((resolve,reject)=>{

        if(!user|| !message||!chat){
            console.error('[messageController]');
             reject('wrong data')
            return false;
        }
        const fullMessage={
            user:user,
            chat:chat,
            message:message,
            date:new Date(),
    
        }
        console.log(fullMessage);
        store.add(fullMessage)    
        resolve(fullMessage);
    })

}
function getMessages(filterUser) {
    return new Promise((resolve,reject)=>{
        resolve(store.list(filterUser))
    })
    
}
 function updateMessage(id,message) {
    return new Promise(async (resolve,reject)=>{

        if(!id||!message){
            reject('invalidate data')
            return false
        }
      const result=  await store.updateText(id,message)
      resolve(result)
    })
    
}
function deleteMessage(id) {
    return new Promise( (resolve,reject)=>{

        if(!id){
            reject('invalidate data')
            return false
        }
        store.remove(id)
        .then(()=>{
            resolve()
        })
  
    })
    
}



module.exports={addMessage,getMessages,updateMessage,deleteMessage}