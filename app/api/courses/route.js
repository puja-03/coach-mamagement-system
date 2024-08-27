import CourseModel from "@/models/CourseModel";
import ConnectDb from "@/utils/ConnectDb";
import { NextResponse } from "next/server";

 export async function POST(req){
    await ConnectDb();
    const {title} = await req.json();
    try{
        const course = await CourseModel.create({title})
        return NextResponse.json(course);
    }
    catch(error){
        return new NextResponse("internal Error",{status:500});
    }
 }