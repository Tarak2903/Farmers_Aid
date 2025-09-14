const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const hello=async () => {
    try{
      await  mongoose.connect(process.env.MONGO_URI)
    }
    catch(error){
        console.log(error.message)
    }
}
module.exports=hello
