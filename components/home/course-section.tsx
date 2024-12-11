import { CourseCard } from "./course-card"

export function CourseSection(){
    return (
        <div className="bg-slate-900">
            <div className="flex flex-col justify-center items-center text-white bg-slate-800 bg-gradient-to-b from-gray-950 dark:to-black">
                <div>
                    <h1 className="text-6xl mt-4">Courses</h1>
                </div>
                <div className="mt-10 flex justify-center items-center gap-4 flex-wrap">
                    <CourseCard 
                    courseName="Computer Networks" 
                    courseDescription="Learn the fundamentals of computer networks, including protocols, topologies, and data communication. Master concepts like IP addressing, routing, and network security to build a strong foundation for IT and cybersecurity roles."/>
                    <CourseCard
                        courseName="Computer Networks" 
                        courseDescription="Learn the fundamentals of computer networks, including protocols, topologies, and data communication. Master concepts like IP addressing, routing, and network security to build a strong foundation for IT and cybersecurity roles."/>
                    <CourseCard courseName="Computer Networks" 
                    courseDescription="Learn the fundamentals of computer networks, including protocols, topologies, and data communication. Master concepts like IP addressing, routing, and network security to build a strong foundation for IT and cybersecurity roles."/>
                </div>
            </div>
        </div>
    )
}