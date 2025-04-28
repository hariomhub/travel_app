const mongoose=require('mongoose');

const connectDB= async ()=>{
    try{

        // this will generally return a promise
        await mongoose.connect(process.env.DATABASE_URI);
    } catch(err){
        console.log(err);
        
    }
}

module.exports=connectDB;