
const Model = require('./model')


function addMessage(message) {
   // list.push(message);
    const mymessage= new Model(message)
    mymessage.save();

}
  function getMessages(filterUser) {
   // return list;
   return new Promise((resolve,reject)=>{
     let filter={}
     if(filterUser!==null){
      filter={user:filterUser}
     }
    Model.find(filter)
     .populate('user')
     .exec((error,populated)=>{
       if(error){
         reject(error)
         return false
       }

       resolve(populated)
     })

   })
}

async function updateText(id,message) {
    // return list;
    const foundmessages= await Model.findOne({_id:id})

   foundmessages.message=message;
  
   const newMessage= await  foundmessages.save();
   return newMessage
 }
 

  function removeMessage(id) {
    // return list;
    return Model.deleteOne({_id:id})

  
 }

module.exports={add:addMessage,list:getMessages,updateText:updateText,remove:removeMessage}