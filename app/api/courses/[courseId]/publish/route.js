import CourseModel from "@/models/CourseModel";
import ConnectDb from "@/utils/ConnectDb"
import { NextResponse } from "next/server";

export const PATCH = async(req, {params}) =>{
    await ConnectDb();
    let {courseId} = params;
    try{
        let course = await CourseModel.findByIdAndUpdate(courseId,{status:"Published"})
         return NextResponse.json(course);

    }
    catch(error){
        console.log("COURSE PUBLISH ERROR",error);
        return new NextResponse("somthing went wrong",{status:500});
    }
}