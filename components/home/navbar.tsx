import { Button } from "@/components/ui/button"

export function Navbar(){
    return(
        <div>
            <div className="w-full flex justify-between items-center h-20 bg-gray-950">
                <div className="pl-10">
                    <h1 className="text-slate-400 text-xl font-bold">
                        AchieversZone
                    </h1>
                </div>
                <div className="flex justify-center items-center pr-10 gap-2">
                    <div className="flex justify-center items-center pr-10 gap-10">
                        <div>
                            <h1 className="text-slate-200 text-xl ">
                                Home
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-slate-200 text-xl">
                                Courses
                            </h1>
                        </div>
                    </div>
                    <div>
                        <Button className="bg-violet-600">Signin </Button>
                    </div>
                    <div>
                        <Button className="bg-violet-600">Signup </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}