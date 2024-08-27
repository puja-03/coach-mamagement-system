import UserModel from "@/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import ConnectDb  from "@/utils/ConnectDb";

export async function POST(req){
    try{
        await ConnectDb();
        const{name,email,password} = await req.json();
        const user = await UserModel.findOne({email});

        if(user){
            return NextResponse.json({
                status:400,
                message:"Email already Exist"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await UserModel.create({name,email,password:hashedPassword})
        return NextResponse.json({message:"register success"},{status:201})
    }
    catch(error){
        return NextResponse.json({message:error.message},{status:500});
    }
}