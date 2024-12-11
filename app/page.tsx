import HeroSection from "@/components/home/herosection";
import { CourseSection } from "@/components/home/course-section";

export default function Home() {
  return(
    <div>
      <div>
        <HeroSection/>
      </div>
      <div>
        <CourseSection/>
      </div>
    </div>
  )
}
