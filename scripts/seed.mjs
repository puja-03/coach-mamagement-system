import CategoryModel from "@/models/CategoryModel";
import ConnectDb from "@/utils/ConnectDb";
import mongoose from "mongoose";
 export async function main(){
    try{
        await ConnectDb();
        await CategoryModel.insertMany([
            {name:"web Designing", description:"testing"},
            {name:"web Music", description:"testing"},
            {name:"web Sports", description:"testing"},
            {name:"web Bussiness", description:"testing"},
            {name:"computer Science", description:"testing"},
            {name:"Accounting", description:"testing"},
            {name:"Fitness", description:"testing"},
            {name:"Engineering", description:"testing"},
        ])
        console.log("seed successfully")

    }
    catch(error){
        console.log("error seeding te database category")
    }
    finally{
       mongoose.connection.close();
    }
}
