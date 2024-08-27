"use server"
import CategoryModel from "@/models/CategoryModel";
import UserModel from "@/models/UserModel";
import ConnectDb from "@/utils/ConnectDb"
import { redirect } from "next/navigation";
import { writeFile} from "fs/promises";
import CourseModel from "@/models/CourseModel";

import {join} from "path";

export async function handleApprove(){
  let id = fornData.get("_id")
  await ConnectDb();

  let record = await UserModel.findByIdAndUpdate(id,{status:true});
  redirect("/admin/student");
}
//delete category
export const handleDelete = async (formData) => {
  await ConnectDb();
  let id = formData.get("_id");
  id = JSON.parse(id);
  let course = await CourseModel.deleteMany({category:id});
  let category = await CategoryModel.findByIdAndDelete(id);
  redirect("/admin/category")
  

}

//inser category
export const handleSubmitCategory = async(formdata) => {
  await ConnectDb();
  let name = formdata.get("name");
  let description = formdata.get("description");
  let category = new CategoryModel({name, description}).save();
  redirect("/admin/categories");
}
///insert course
export const handleSubmitCourse = async (formData) => {
  await ConnectDb();

  let title = formData.get("title");
  let description = formData.get("description");
  let fee = formData.get("fee");
  let duration = formData.get("duration");
  let category = formData.get("category");
  let startDate = formData.get("startDate");
  let endDate = formData.get("endDate");
  let difficulty = formData.get("difficulty");
  let status = formData.get("status");
  let prerequisites = formData.get("prerequisites");   
       
  
  // image work
  let image = formData.get("image");
  let bytes = await image.arrayBuffer();
  let buffer = Buffer.from(bytes);
  let path = join("./public", "course_image", image.name);

  await writeFile(path, buffer);
  let course = await  new CourseModel({ title, description, fee, duration, category, image:image.name, startDate,endDate, difficulty, status, prerequisites }).save();
  let courseId = course._id;
  let categoryUpdate = await CategoryModel.findByIdAndUpdate(category,{$push:{courses:courseId}});
  redirect("/admin/courses");
};
// delete Course 
export const handleCourseDelete =async (courseId,formData)=>{

let course =await CourseModel.findByIdAndDelete(courseId)

}