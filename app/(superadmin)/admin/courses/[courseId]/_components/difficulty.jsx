"use client"

import { Button } from "@/components/ui/button"
import { Combobox } from "@/components/ui/combox"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

const formShchema = z.object({
  difficulty: z.string().min(1, {
    message: "difficulty is required"
  })
})

const DifficultyForm = ({initialData, courseId,options}) => {
  const router = useRouter();
  const [isEditing, setEditing] = useState(false);

  const toggleEditing = () => setEditing((current) => !current);

  const form = useForm({
    resolver: zodResolver(formShchema),
    defaultValues: {
      difficulty: initialData.difficulty || ""
    }
  })
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      const response = await axios.patch(`/api/courses/${courseId}`, values)
      toast.success("difficulty updated successfully")
      router.refresh();
      toggleEditing();
    }
    catch (error) {
      toast.error("something went worng",error.message)
    }
  }
  return (
    <div className="mt-6 bg-slate-200 rounded marker:dark:bg-gray-800 p-2 ">
      <div className="font-medium flex items-center justify-between">
        Course Difficulty

        <Button onClick={toggleEditing} variant="ghost">
          {isEditing ? (
             <div>Cancel</div>
          ):(
            <>
            <Pencil className="h-4 w-4 mr-2"/>
            Edit Difficulty
            </>
          )}
        </Button>
      </div>
      {
        !isEditing && (
          <p className={cn("text-sm mt-2 dark:text-gray-300", !initialData?.difficulty  && "italic text-gray-600")}>
            {initialData?.difficulty || "label for difficulty not set for this course"}
          </p>
        )
      }
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-3">
            <FormField
            control={form.control}
            name="difficulty"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Combobox options={options} disabled={isSubmitting} className="bg-white" {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}/>

            <div className="flex items-center gap-x-2">
              <Button className="rounded" type="submit" disabled={!isValid || isSubmitting}>submit</Button>
            </div>
          </form>
        </Form>
      )}

    </div>
  )
}

export default DifficultyForm