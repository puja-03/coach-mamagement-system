import React from 'react'
import DashBoard from '../ui/DashBoard'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const page = () => {
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
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
       </div>
       <DashBoard/>
    </div>
  )
}

export default page