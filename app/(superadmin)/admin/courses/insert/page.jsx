"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import {useForm } from "react-hook-form";
import { Form,FormControl,FormDescription,FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import *as z from "zod"
import { useRouter } from "next/navigation";
import  {zodResolver} from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Link } from 'lucide-react';
import {Button } from '@/components/ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';

const  formSchema = z.object({
    title: z.string().min(5,{
        message:"this is required"
    })
})

const Page = () => {

    const router = useRouter();
    const form = useForm({
        resolver:zodResolver(formSchema),
        defaultValues:{
            title:""
        }
    })
    const {isSubmitting, isValid} = form.formState;
    const  onSubmit = async(values)=>{
        console.log(values);
        try{
           const response = await axios.post("/api/courses",values);
           toast.success("course created successfully");
           router.push(`/admin/courses/${response.data._id}`);
        }
        catch(error){
         toast.error("error course not create")
        }
    }
   
    return (
        <div className='px-10 py-5'>
            <div className="flex mb-8">
        <Breadcrumb>
          <BreadcrumbList>
          <BreadcrumbItem>
             <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator/>
          <BreadcrumbItem>
             <BreadcrumbLink href="/admin/dashboard">Courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator/>
          <BreadcrumbItem>
              <BreadcrumbPage>Insert</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
       </div>

            <div className='flex justify-between w-full'>
                <h1 className='text-2xl font-medium text-black'>Insert Course</h1>
                <Link href="/admin/courses" className=" bg-green-900 rounded text-white px-8 py-3">Go back</Link>
            </div>

            <div className='mx-auto max-w-5xl flex md:items-center md:justify-center h-full p-6'>
                <div>
                   <h1 className="text-xl">Name Your Course</h1>
                   <p className="text-sm text-slate-600">What would you like to name your courses ? dont worry you can change this later</p>
                   <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField control={form.control} name="title"
                          render ={({field}) => (
                            <FormItem>
                                <FormLabel>course title</FormLabel>
                                 <FormControl>
                                    <Input disabled={isSubmitting} placeholder="E.g web Designing" {...field}/>
                                 </FormControl>
                                 <FormDescription>What will you teach in this coures</FormDescription>
                                  <FormMessage/>
                            </FormItem>
                          )}
                        />
                       <Link href='/admin/courses'>
                         <Button type="button">Cancel</Button>
                       </Link>
                        
                        <Button className="rounded" type="submit" disabled={!isValid || isSubmitting}>Create course</Button>
                    </form>
                   </Form>
                </div>
            </div>
        </div>
    )
}

export default Page