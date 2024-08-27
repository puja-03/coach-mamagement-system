import CourseCard from "./CourseCard";

const CourseSection = ({courses}) => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {courses.map((course) => (
                <CourseCard 
                key={course._id} 
                id={course._id}
                title={course.title}
                image={course.image}
                fees={course.fee}
                duration={course.duration}
                seats={course.enrollmentLimit}
                category={course.category?.name}
                prerequisites={course.prerequisites}
             />
            ))
            }
        </div>
        </div>    
    );
}

export default CourseSection