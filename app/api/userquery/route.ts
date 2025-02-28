import { NextResponse } from "next/server";
import prisma from "@/prisma";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export async function POST(request: Request) {
    try {
        const { query } = await request.json(); // Extract `query` instead of `data`

        if (!query) {
            return NextResponse.json({ error: "No query provided" }, { status: 400 });
        }

        // Fetch course-related data from Prisma
        const courseData = await prisma.coursePage.findFirst({
            where: { courseId: 'ckxyz123456789abcdef' },
        });

        if (!courseData) {
            return NextResponse.json({ error: "Course data not found" }, { status: 404 });
        }

        // Initialize Gemini AI
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Construct AI prompt
        const prompt = `
Generate structured educational content in JSON format based on the following user query and course data. 
Each response should be a **single JSON array** with objects containing "type" (either "heading", "subheading", or "content") and "text".

Example:
[
  { "type": "heading", "text": "Introduction to ${query}" },
  { "type": "subheading", "text": "Overview of ${query}" },
  { "type": "content", "text": "${query} is a topic related to ${courseData.data}. Here’s a deeper explanation..." }
]

Ensure the JSON is valid and properly structured. User Query: **${query}**
`;

        // Generate AI response
        const result = await model.generateContent(prompt);

        let responseText = result.response.text?.() || result.response;
        responseText = responseText.replace(/```json|```/g, "").trim();

        // Parse JSON response safely
        let jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
        } catch (jsonError: any) {
            console.error("Failed to parse JSON:", jsonError);
            return NextResponse.json({ error: "Invalid JSON received from AI", details: jsonError.message }, { status: 500 });
        }

        return NextResponse.json(jsonResponse);

    } catch (error: any) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
