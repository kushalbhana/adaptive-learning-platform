import prisma from "@/prisma";
import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export const GET = async (request: Request) => {
    try {
        const { searchParams } = new URL(request.url);
        const pagenumber: number = Number(searchParams.get("pagenumber")) || 1;

        // Fetch course page data from Prisma
        const data = await prisma.coursePage.findUnique({
            where: {
                courseId: 'ckxyz123456789abcdef',
                pageNumber: pagenumber + 1
            }
        });

        if (!data) {
            return NextResponse.json({ error: "No data found for the given page number" }, { status: 404 });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt1 = `Generate structured educational content in JSON format based on the topics I provide. Each response should be a **single JSON array** containing objects with "type" (either "heading", "subheading", or "content") and "text" fields. Do not return multiple separate JSON objects—return a single array.
        
        Example format:
        [
          { "type": "heading", "text": "Introduction to Computer Networks" },
          { "type": "subheading", "text": "What is a Computer Network?" },
          { "type": "content", "text": "A computer network is a set of devices..." }
        ]

        Ensure the JSON is valid and properly structured. Here are the topics: ${data?.data}`;

        const prompt = `
I previously generated the following structured educational content in JSON format:

\`\`\`json
[
  { "type": "heading", "text": "Introduction to Computer Networks" },
  { "type": "subheading", "text": "What is a Computer Network?" },
  { "type": "content", "text": "A computer network is a set of devices (computers, servers, smartphones, etc.) connected together to share resources. These resources can include files, printers, internet connections, and services. Networks enable seamless communication and data transfer, allowing businesses, educational institutions, and individuals to operate more efficiently. Depending on the scale and purpose, networks can be private (such as an internal office network) or public (like the internet)." },
  
  { "type": "subheading", "text": "Types of Networks (LAN, WAN, MAN, PAN)" },
  { "type": "content", "text": "Networks are classified based on their geographical area and purpose. The common types are:" },
  { "type": "content", "text": "- **LAN (Local Area Network):** Connects devices within a limited area, such as a home, office, or school. LANs typically use Ethernet cables or Wi-Fi for connectivity and are commonly found in workplaces and universities. They offer **high-speed communication** but cover only a **small geographic area**." },
  { "type": "content", "text": "- **WAN (Wide Area Network):** Spans a large geographical area, often connecting multiple LANs together (e.g., the Internet). WANs rely on **fiber optics, satellites, or leased telecommunication lines** to provide connectivity across different cities or even countries. The internet itself is the largest example of a WAN." },
  { "type": "content", "text": "- **MAN (Metropolitan Area Network):** Covers a metropolitan area, such as a city or town. It's larger than a LAN but smaller than a WAN, commonly used by **government agencies, large corporations, and public Wi-Fi providers**. MANs often rely on high-speed fiber optic networks to enable communication between city-wide institutions." },
  { "type": "content", "text": "- **PAN (Personal Area Network):** A network centered around an individual's workspace and devices (e.g., Bluetooth connections between a phone and headphones). PANs are **short-range** and designed for **personal use**, such as **wireless connections between smartwatches, smartphones, and laptops**." },

  { "type": "subheading", "text": "Network Topologies (Bus, Star, Mesh, Ring)" },
  { "type": "content", "text": "Network topology refers to the arrangement of devices and connections in a network. Choosing the right topology impacts **performance, reliability, and scalability**. Common topologies include:" },
  { "type": "content", "text": "- **Bus Topology:** All devices are connected to a single cable (the bus). It's simple but a break in the cable can disrupt the entire network. **Advantages**: Cost-effective, easy to set up. **Disadvantages**: Slow performance under heavy load, a single point of failure." },
  { "type": "content", "text": "- **Star Topology:** All devices are connected to a central hub or switch. This is more reliable than a bus topology as a failure in one device only affects that device. **Advantages**: Easy to manage, scalable. **Disadvantages**: Hub failure can disrupt communication." },
  { "type": "content", "text": "- **Mesh Topology:** Every device is connected to every other device. This provides high redundancy but is expensive to implement. **Advantages**: High reliability, no single point of failure. **Disadvantages**: Costly and complex setup." },
  { "type": "content", "text": "- **Ring Topology:** Devices are connected in a circular fashion. Data travels around the ring until it reaches its destination. **Advantages**: Predictable performance, no collisions. **Disadvantages**: A break in the ring can disrupt the entire network." },

  { "type": "subheading", "text": "Applications of Computer Networks" },
  { "type": "content", "text": "Computer networks enable a wide range of applications, including:" },
  { "type": "content", "text": "- **Resource Sharing:** Sharing files, printers, and other peripherals. For example, employees in an office can print documents from different computers using a shared printer." },
  { "type": "content", "text": "- **Communication:** Email, instant messaging, video conferencing. Modern businesses and organizations rely on networks for **real-time collaboration, remote work, and virtual meetings**." },
  { "type": "content", "text": "- **Data Storage:** Centralized data storage and backup. Cloud storage services such as **Google Drive, Dropbox, and OneDrive** leverage networking to provide **remote access and data synchronization**." },
  { "type": "content", "text": "- **Internet Access:** Connecting to the internet for browsing, downloading, and online services. **ISPs (Internet Service Providers)** facilitate internet connectivity for homes and businesses through **Wi-Fi, fiber optics, and mobile data networks**." },
  { "type": "content", "text": "- **Online Gaming:** Multiplayer gaming and virtual worlds. Online games such as **Fortnite, Call of Duty, and FIFA** utilize computer networks to enable **real-time multiplayer interactions** over the internet." }
]
\`\`\`

### **Task: Expand the Existing Content**
- **Do NOT add new sections or topics**.
- **Increase the length of each content field** by **adding detailed explanations, real-world examples, and technical insights**.
- **Ensure the JSON structure remains valid and unchanged**.
- **Do NOT remove or alter headings or subheadings**.
- **Return only the expanded JSON array** without any additional text or formatting.
`;




        // Generate content
        const result = await model.generateContent(prompt);

        // Extract AI response text safely
        let responseText = result.response.text?.() || result.response;

        // Remove potential Markdown formatting (```json and ```)
        responseText = responseText.replace(/```json|```/g, "").trim();

        console.log("Raw AI Response:", responseText); // Debugging output

        // Attempt to parse JSON
        let jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
        } catch (jsonError: any) {
            console.error("Failed to parse JSON:", jsonError);
            return NextResponse.json({ error: "Invalid JSON received from AI", details: jsonError.message }, { status: 500 });
        }

        // Ensure valid JSON response
        return NextResponse.json(jsonResponse);

    } catch (error: any) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
};
