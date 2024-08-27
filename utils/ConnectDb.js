import mongoose from "mongoose";

 async function ConnectDb(){
    try{
        
      const  client = await mongoose.connect(process.env.MONGODB_URI);
        console.log ("connect to mongoDb");
    }
    catch(error){
        console.log(error.message);
    }
}
export default ConnectDb
