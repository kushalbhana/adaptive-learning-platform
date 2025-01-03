import { AuthDialogbox } from "./authDialogBox"
import Link from "next/link"

export function Navbar(){
    return(
        <div>
            <div className="w-full flex justify-between items-center h-20 bg-gray-950">
                <div className="pl-10">
                    <h1 className="text-slate-400 text-xl font-bold">
                    <Link href="/">
                        <img src="https://utfs.io/f/ZZtfGUCrA4hKhflzFys81fVdGUtFOkQwnNbrC4pgRKe59qsh" alt="AchieversZone" width="300px" />
                        </Link>
                    </h1>
                </div>
                <div className="flex justify-center items-center pr-10 gap-2">
                    <div className="flex justify-center items-center pr-10 gap-10">
                        <div>
                            <h1 className="text-slate-200 text-xl ">
                                <Link href="/">
                                    Home
                                </Link>
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-slate-200 text-xl">
                                Courses
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-slate-200 text-xl">
                                My Courses
                            </h1>
                        </div>
                    </div>
                    <div>
                        <AuthDialogbox/>
                    </div>
                </div>
            </div>
        </div>
    )
}