import IconBadge from "@/components/icon-badge";
import CourseModel from "@/models/CourseModel";
import ConnectDb from "@/utils/ConnectDb";
import { IndianRupee, Layout, LayoutDashboard } from "lucide-react";
import React from "react";
import TitleForm from "./_components/TitleForm";
import FeeForm from "./_components/feeForm";
import InstructorForm from "./_components/instructorForm";
import DescriptionForm from "./_components/descriptionForm copy";
import DurationForm from "./_components/durationform";
import CategoryModel from "@/models/CategoryModel";
import DifficultyForm from "./_components/difficulty";
import CategoryForm from "./_components/category";
import PrerequisitesForm from "./_components/prerequisites";
import EnrollmentLimitForm from "./_components/enrollmentform";
import { Action } from "./_components/action";
import { ImageForm } from "./_components/image-form";

const page = async ({ params }) => {
  await ConnectDb();
  const course = await CourseModel.findById(params.courseId);
  const categories = await CategoryModel.find();
  const { courseId } = params;
  

  const requiredFields =[
    course.title,
    course.description,
    course.fee,
    course.instructor,
    course.duration,
    course.category,
    course.difficulty,
    course.prerequisites,
    course.enrollmentLimit,
    course.image,
  ]
   const totalFields = requiredFields.length;
   const completedFields = requiredFields.filter(Boolean).length;
   const  completedText = `${completedFields}/${totalFields} completed` ;
   const isCompleted =requiredFields.every(Boolean);
  const options =[
     {
      label:"Beginner",
      value:'Beginner'
     },
     {
        label:'Intermediate',
        value:'Intermediate'
     },
     {
       label:'Advance',
       value:'Advance'
     }
  ]

  return (
    <div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium"> Course Setup</h1>
            <span className="text-sm text-slate-600 mt-2">Complete all fields {completedText}</span>
          </div>
         <Action disabled={!isCompleted} courseId={params.courseId} isPublish={course.status} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-2xl">Customize your course</h2>
            </div>
            <TitleForm initialData={course} courseId={courseId} />
            <DescriptionForm initialData={course} courseId={courseId} />
            <InstructorForm initialData={course} courseId={courseId} />

            <CategoryForm initialData={course} courseId={courseId} options={categories.map((cate)=>({
              label:cate.name,
              value:cate._id,
            }))} />
            <EnrollmentLimitForm initialData={course} courseId={courseId} />
          </div>
          <div className="">
            <div className="flex items-center gap-x-2">
              <IconBadge icon={IndianRupee}/>
              <h2 className="text-xl">sell your Course</h2>
            </div>
            <FeeForm initialData={course} courseId={courseId} />
            <DurationForm initialData={course} courseId={courseId} />
            <DifficultyForm initialData={course} courseId={courseId} options={options} />
            <PrerequisitesForm initialData={course} courseId={courseId} />
            <ImageForm initialData={course} courseId={courseId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
