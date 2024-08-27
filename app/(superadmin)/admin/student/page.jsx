import UserModel from '@/models/UserModel';
import ConnectDb from '@/utils/ConnectDb';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { DataTable } from '../ui/data-table';
import { columns } from './columns';

const page = async () => {
  await ConnectDb();
    let users = await UserModel.find({});
    users = JSON.parse(JSON.stringify(users));
  return (<>
   
    <div className=' py-5 px-[5%]'>
    <div className="flex">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Student</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      <h2 className='text-3xl font-medium text-slate-950 my-5 '>Manage Student ({users.length})</h2>
    </div>
    <div className='w-full px-[5%]'>
    <DataTable columns={columns} data={users}/>
    </div>
    
    </>
  )
}

export default page