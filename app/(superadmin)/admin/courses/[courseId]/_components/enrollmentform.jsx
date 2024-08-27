"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { formatPrice, formatSeat } from "@/lib/format"
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
  enrollmentLimit: z.string().min(1, {
  })
})

const EnrollmentLimitForm = ({initialData, courseId}) => {
  const router = useRouter();
  const [isEditing, setEditing] = useState(false);

  const toggleEditing = () => setEditing((current) => !current);

  const form = useForm({
    resolver: zodResolver(formShchema),
    defaultValues: {
      enrollmentLimit: initialData.enrollmentLimit || ""
    }
  })
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      const response = await axios.patch(`/api/courses/${courseId}`, values)
      toast.success("enrollmentLimit updated successfully")
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
        Course enrollmentLimit

        <Button onClick={toggleEditing} variant="ghost">
          {isEditing ? (
             <div>Cancel</div>
          ):(
            <>
            <Pencil className="h-4 w-4 mr-2"/>
            Edit enrollmentLimit
            </>
          )}
        </Button>
      </div>
      {
        !isEditing && (
          <p className={cn("text-sm mt-2 dark:text-gray-300", !initialData?.enrollmentLimit  && "italic text-gray-600")}>
             {formatSeat(initialData?.enrollmentLimit)  || "No Seat Limit  for this course"}
          </p>
        )
      }
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-3">
            <FormField
            control={form.control}
            name="enrollmentLimit"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input disabled={isSubmitting} className="bg-white" placeholder="e.g  write about course"{...field}/>
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

export default EnrollmentLimitForm