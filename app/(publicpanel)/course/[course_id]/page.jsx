import React from 'react'
import CourseModel from '@/models/CourseModel';
import ViewCoursePage from '../../_component/ViewCoursePage';
import ConnectDb from '@/utils/ConnectDb';

const page = async ({params}) => {
    await ConnectDb()
    let courseId = params.course_id;

    let course = await CourseModel.findById(courseId).populate("category");

  return (
    <div>
        <ViewCoursePage course={course}/>
    </div>
  )
}

export default page