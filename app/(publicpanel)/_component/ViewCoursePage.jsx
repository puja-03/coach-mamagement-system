import Image from "next/image";

const ViewCoursePage = ({ course }) => {
    return (
        <div className="container bg-gray-800 mx-auto px-4">
            <div className="py-8">
                <h1 className="text-3xl font-semibold mb-4">{course.title}</h1>
                <Image src={`/course_image/${course.image}`} alt={course.title} className="w-full  h-64 rounded object-cover mb-4" />
                <p className="text-lg text-white">{course.description}</p>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Course Details</h2>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white ">Fee:</span>
                        <span className="text-white ">₹{course.fee}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white ">Duration:</span>
                        <span className="text-white ">{course.duration} Weeks</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white ">Difficulty:</span>
                        <span className="text-white ">{course.difficulty}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white ">Category:</span>
                        <span className="text-white ">{course.category.name}</span>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ViewCoursePage;