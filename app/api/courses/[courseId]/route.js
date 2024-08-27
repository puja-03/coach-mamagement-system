import CourseModel from "@/models/CourseModel";
import ConnectDb from "@/utils/ConnectDb"
import { NextResponse } from "next/server";

export const PATCH =async (req,{params})=>{
  try{
    await ConnectDb();
    let values = await req.json();
    let {courseId}  = params;
    let course = await CourseModel.findByIdAndUpdate(courseId,{...values});
    return NextResponse.json(course);
  }
  catch(error){
    console.log("[course update error]"+error);
    return new NextResponse("internal error",{status:500});
  }

}
export const DELETE = async(req,{params})=>{
  try{
     await ConnectDb();
     let {courseId} = params;
     let course = await CourseModel.findByIdAndDelete(courseId)
     return NextResponse.json(course);
  }
  catch(error){
     console.log("[COURSE DELETE ERROR ] ERROR",error);
     return new NextResponse("Internal Error",{status:500});
  }
}