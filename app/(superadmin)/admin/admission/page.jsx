import React from "react";
import UserModel from "@/models/UserModel";
import ConnectDb from "@/utils/ConnectDb";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DataTable } from "../ui/data-table";
import { columns } from "../courses/columns";

const page = async () => {
  await ConnectDb();
  let users = await UserModel.find({ status: false, role: "user" });
  users = JSON.parse(JSON.stringify(users));
  return (
    <>
      <div className="md:px-10 md:py-5 p-4">
        <div className="flex">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Admission</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mt-5 ">
          Manage New Admission ({users.length})
        </h2>
      </div>
      <div className="px-10 w-full  flex flx-1">
        <DataTable columns={columns} data={users}/>
      </div>
    </>
  );
};

export default page;
