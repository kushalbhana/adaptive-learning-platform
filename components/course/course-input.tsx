"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CourseInput() {
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/course/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: value }),
      });
      const result = await response.json();
      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-80 z-10"
        />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
