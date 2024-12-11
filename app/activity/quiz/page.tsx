import { QuizForm } from "@/components/activity/quiz/quizform"

export default function QuizPage(){
    return (
        <div className="w-full flex flex-col justify-center items-center">
                <div className="mt-40">
                    <h1 className="text-4xl font-bold">Quiz Based on last chapter</h1>
                </div>
            <div className="mt-12">
                <div>
                    <QuizForm />
                </div>
            </div>
        </div>
    )
}