import  CourseView  from "@/components/course/courseview"
import CourseInput from "@/components/course/course-input"
export default function Course(){
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="-mt-24">
                <CourseView/>
            </div>
        </div>
    )
}