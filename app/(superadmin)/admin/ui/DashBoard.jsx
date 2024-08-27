import CourseModel from '@/models/CourseModel';
import UserModel from '@/models/UserModel';
import ConnectDb from '@/utils/ConnectDb';
import React from 'react'
import DashBoardCard from './DashBoardCard';

const DashBoard = async () => {
    await ConnectDb();
    const totalStudents = await UserModel.countDocuments({status:true});
    const totalAdmissions = await UserModel.countDocuments({status:false});
    const totalCourses = await CourseModel.countDocuments();
    const totalPayments = 500;

    let CounData = [
        {
            name:"Total Students",
            value:totalStudents,
        },
        {
            name:"Total Addmissions",
            value:totalAdmissions,
        },
        {
            name:"Total Courses",
            value:totalCourses,
        },
        {
            name:"TotalPayments",
            value:totalPayments,
        },
    ]
  return (
   <div className='flex gap-5 flex-1  flex-col md:flex-row'>
    {CounData.map((card, i)=><DashBoardCard key={i} text={card.name}count={card.value}/>)}
   </div>

  )
}

export default DashBoard