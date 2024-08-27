import React from 'react'
import AddCategory from '../ui/AddCategory'
import Categories from '../ui/Categories'
import CategoryModel from '@/models/CategoryModel'
import ConnectDb from '@/utils/ConnectDb'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const page = async () => {
    await ConnectDb();
    let categories = await CategoryModel.find();
  return (
    <div className='px-10 py-5'>
      <div className="flex">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Categories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
    <h1 className='my-3 text-3xl font-semibold text-slate-500'>Category Management({categories.length})</h1>
    <div className='flex gap-5'>
        <div className='w-3/4 border'>
            <Categories categories={categories}/>
        </div>
        <div className='w-1/4'>
            <AddCategory />
        </div>
    </div>
</div>
  )
}

export default page