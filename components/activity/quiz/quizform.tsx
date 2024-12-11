"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Define the type for a question
type Question = {
  text: string
  options: string[]
}

// Type for form data (questions array)
type FormData = {
  questions: {
    question: string
    answer: string
  }[]
}

// Define the schema for each question and its possible answers
const questionSchema = z.object({
  questions: z.array(
    z.object({
      question: z.string().min(5, "Question must be at least 5 characters."),
      answer: z.string().nonempty("Please select an option."),
    })
  ),
})

export function QuizForm() {
  const [serverQuestions, setServerQuestions] = useState<Question[]>([]) // Correctly typed as Question[]

  // Form initialization with validation schema
  const form = useForm<FormData>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      questions: [],
    },
  })

  // Simulate fetching questions from the server
  useEffect(() => {
    async function fetchQuestions() {
      const fetchedQuestions = await fetch('/api/questions')
        .then(response => response.json())
        .catch(error => console.error('Error fetching questions:', error))

      const formattedQuestions = fetchedQuestions.map((question: Question) => ({
        question: question.text,
        answer: "", // Initialize empty answer
      }))

      setServerQuestions(fetchedQuestions) // Save the full data (with options) in serverQuestions
      form.reset({ questions: formattedQuestions }) // Only reset the form with question and answer fields
    }

    fetchQuestions()
  }, [])

  // Function to handle form submission
  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {serverQuestions.map((question, index) => (
          <FormField
            key={index}
            control={form.control}
            name={`questions.${index}.answer`} // Correct name syntax
            render={({ field }) => (
              <FormItem>
                <FormLabel>{question.text}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="space-y-2"
                  >
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={option} 
                          id={`q${index}-option${optionIndex}`} 
                        />
                        <FormLabel htmlFor={`q${index}-option${optionIndex}`}>{option}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  )
}
