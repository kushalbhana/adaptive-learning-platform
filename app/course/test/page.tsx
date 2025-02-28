"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const RenderContent = () => {
    const [courseData, setCourseData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/course-page?pagenumber=1");
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

                const jsonData = await res.json();
                
                console.log("Raw API Response:", jsonData); // Debugging

                let parsedData;
                if (typeof jsonData === "string") {
                    try {
                        parsedData = JSON.parse(jsonData);
                    } catch (error) {
                        throw new Error("Invalid JSON structure received from API");
                    }
                } else if (Array.isArray(jsonData)) {
                    parsedData = jsonData;
                } else {
                    throw new Error("Unexpected data format received from API");
                }

                setCourseData(parsedData);
            } catch (error: any) {
                console.error("Fetch error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourseData();
    }, []);

    if (loading) return <p className="text-center mt-5">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-5">Error: {error}</p>;

    return (
        <div className="container mx-auto p-6">
            {courseData.map((item: any, index) => {
                switch (item.type) {
                    case "heading":
                        return <h1 key={index} className="text-4xl font-bold mb-4 mt-24">{item.text}</h1>;
                    case "subheading":
                        return <h2 key={index} className="text-2xl font-semibold mb-3 mt-10">{item.text}</h2>;
                    case "content":
                        return (
                            <div key={index} className="text-lg mb-2">
                                <ReactMarkdown>{item.text}</ReactMarkdown>
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default RenderContent;
