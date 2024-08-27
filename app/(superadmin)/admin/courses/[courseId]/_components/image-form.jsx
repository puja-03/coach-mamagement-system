"use client";

import { Button } from "@/components/ui/button"
import { FileUpload } from "@/components/ui/file-upload";
import axios from "axios"
import {  ImageIcon, Pencil, PlusCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

 export  const ImageForm = ({ initialData, courseId }) => {
  const router = useRouter();
  const [isEditing, setEditing] = useState(false);

  const toggleEditing = () => setEditing((current) => !current);

  const onSubmit = async (values) => {
    try {
      const response = await axios.patch(`/api/courses/${courseId}`, values)
      toast.success("course updated successfully")
      router.refresh();
      toggleEditing();
    }
    catch (error) {
      toast.error("something went worng")
    }
  }
  return (
    <div className="mt-6 bg-slate-200 rounded-md marker:dark:bg-gray-800 p-3">
      <div className="font-medium flex items-center justify-between">
        Course Image

        <Button onClick={toggleEditing} variant="ghost">
          {isEditing && (
             <div>Cancel</div>
          )}
          {!isEditing && !initialData.image && (
            <>
                 <PlusCircle className="w-3 h-4 mr-3"/>Add An Image
            </>
          )}
           {!isEditing && initialData.image && (
            <>
                 <Pencil className="w-3 h-4 mr-3"/>Edit Image
            </>
          )}

        </Button>
      </div>
      {
        !isEditing && (
            (! initialData.image) ? (
                <div className="flex h-56 items-center justify-center bg-slate-200 rounded-md">
                    <ImageIcon className="w-10 h-10 text-slate-500"/>
                </div>
            ) : 
                <div className="relative aspect-video mt-2">
                    <Image alt="upload" fill className="object-cover rounded-md" src={initialData.image}/>
                </div>
            )
        }
      {isEditing && (

        <div>
            <FileUpload endpoint="courseImage" onChange={(url) =>{
                if(url){
                    onSubmit({image: url})
                }
            } }/>
       

            <div className="flex items-center gap-x-2">
                <p>16.9 aspect ratio recommend</p>
            </div>
            </div>
      )}

    </div>
  )
}