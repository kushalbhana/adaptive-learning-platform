"use client"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

export function CourseView(){
    const router = useRouter()

    const handleClick = () => {
        router.push("/activity/quiz"); 
      };
    

    return (
        <div className="flex flex-col max-w-4xl mt-48">
            <div className="mb-5 flex gap-4 justify-end">
                <Input className="w-72" placeholder="Ask or Suggest AI"/>
                <Button>Ask</Button>
            </div>
            <div>
                <h1 className="text-5xl font-bold">Chapter 1: Introduction to Computer Networks</h1>
            </div>
            <div className="mt-2">
                <h1 className="text-xl font-bold">.1 What is a Computer Network?</h1>
                1
                A computer network is a system that allows computers and other devices to communicate and share resources. These resources can include files, printers, and internet access. The devices in a network are connected using various communication channels, such as cables, wireless connections, or satellite links.

                <h1 className="text-xl font-bold mt-4">Key Elements of a Network:</h1>
                <ul className="list-disc pl-4">
                   <li className="mt-1"> Devices: Computers, servers, routers, switches, and other devices.</li>
                   <li className="mt-1">Transmission Medium: Wires (Ethernet cables), radio waves (Wi-Fi), or optical fibers.</li>
                   <li className="mt-1"> Protocols: Rules and standards for communication between devices.</li>
                </ul>
            </div>


            <div className="mt-6">
                <h1 className="text-xl font-bold">1.2 Types of Computer Networks</h1>
                Computer networks can be classified based on their size, coverage area, and type of connections used. The most common types of networks are:

                <ul className="list-disc pl-4">
                   <li className="mt-1"> LAN (Local Area Network): A network limited to a small geographic area, such as an office building or a home.</li>
                   <li className="mt-1">WAN (Wide Area Network): A network that spans large geographic areas, such as cities or even countries. The internet is the largest example of a WAN.</li>
                   <li className="mt-1"> MAN (Metropolitan Area Network): A network that covers a city or a large campus.</li>
                   <li className="mt-1"> PAN (Personal Area Network): A network for personal devices, such as smartphones or laptops, within a small range (usually a few meters).</li>
                </ul>
            </div>

            <div className="mt-6">
                <h1 className="text-xl font-bold">1.3 Why Do We Need Computer Networks?</h1>

                <h1 className="text-xl font-bold mt-2">Computer networks offer several advantages:</h1>
                <ul className="list-disc pl-4">
                   <li className="mt-1"> Resource Sharing: Devices can share printers, files, and other resources.</li>
                   <li className="mt-1">Remote Access: Users can access data and services from anywhere in the world, provided they have an internet connection.</li>
                   <li className="mt-1">Scalability: New devices can be added easily to expand the network.</li>
                </ul>
            </div>

            <div className="mt-6">
                <h1 className="text-xl font-bold">1.4 Common Computer Network Protocols</h1>
                Protocols are sets of rules that determine how data is transmitted over a network. Some common protocols include:
                <ul className="list-disc pl-4">
                   <li className="mt-1"> TCP/IP (Transmission Control Protocol/Internet Protocol): The fundamental protocol suite for internet communication.</li>
                   <li className="mt-1">HTTP (Hypertext Transfer Protocol): Used for transferring web pages on the internet.</li>
                   <li className="mt-1">FTP (File Transfer Protocol): Used to transfer files between devices on a network.</li>
                   <li className="mt-1">FTP SMTP (Simple Mail Transfer Protocol): Used for sending emails.</li>
                   <li className="mt-1">DNS (Domain Name System): Converts domain names into IP addresses.</li>
                </ul>
            </div>

            <div className="mt-6">
                <h1 className="text-xl font-bold">1.5 Key Components of a Computer Network</h1>
                A typical computer network consists of several key components:
                <ul className="list-disc pl-4">
                   <li className="mt-1"> Bus Topology: All devices are connected to a single central cable (the bus). It's simple but can be slow.</li>
                   <li className="mt-1">Star Topology: All devices are connected to a central device, typically a switch or router. It's easy to set up and manage. </li>
                   <li className="mt-1">Ring Topology: Devices are connected in a circular manner, where data travels in one direction.</li>
                   <li className="mt-1">Mesh Topology: Each device is connected to every other device, ensuring redundancy and reliability.</li>
                </ul>
            </div>

            <div className="mt-6">
                <h1 className="text-xl font-bold">1.7 Hands-On Activity: Build Your Own Network</h1>
                Objective: To understand how devices communicate in a network.
                <ul className="list-disc pl-4">
                   <li className="mt-1"> Experiment with a basic TCP/IP connection:</li>
                   <ul className="list-disc pl-4">
                        <li className="mt-1">Connect two or more computers using an Ethernet cable or Wi-Fi.</li>
                        <li className="mt-1">Share files between computers in the network.</li>
                   </ul>
                   <li className="mt-1"> Set up a simple LAN at home:</li>
                   <ul className="list-disc pl-4">
                        <li className="mt-1">Open the command prompt or terminal and use the ping command to test the connection between two devices on the network.</li>
                   </ul>
                   <li className="mt-1"> Explore common network devices:</li>
                   <ul className="list-disc pl-4">
                        <li className="mt-1">Investigate the function of routers, switches, and modems. Set up a home router and understand its configuration interface.
                        </li>
                   </ul>
                </ul>
            </div>

            <div className="mt-10 mb-10 flex items-center justify-end gap-4">
                <div>
                    <Button >Next Chapter</Button>
                </div>
                <div>
                <Button 
                onClick={handleClick} 
                className="bg-violet-600 text-white px-4 py-2 rounded"
                >
                Take Quiz
                </Button>
                </div>
            </div>
            

        </div>
    )
}