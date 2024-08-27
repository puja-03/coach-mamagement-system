import Hero from "./_component/Hero";
import CourseSection from "./_component/CourseSection";
import ConnectDb from "@/utils/ConnectDb";
import CourseModel from "@/models/CourseModel";
import CategoryModel from "@/models/CategoryModel";
import Categories from "./_component/categories";

export default async function Home() {
  await ConnectDb();
  let courses = await CourseModel.find({status:"Published"}).populate("category");
  let categories = await CategoryModel.find({})

 // await main()


  return (
    <>
    {/* <Hero/> */}
       <div className=" md:px-[5%] px-2 w-full">
          <Categories items={categories}/>
          <CourseSection courses={courses}/> 
       </div>

    </>
  );
}
