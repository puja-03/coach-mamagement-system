"use client"
import { cn } from "@/lib/utils";
import { Filter, GraduationCap, IndianRupee, LayoutDashboard, List, User, icons } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const SidebarItem = ({name,url,icon:Icon}) => {
  const pathname = usePathname();
  const router = useRouter();
  const  isActive= (pathname ==="/" && url ==="/" ||pathname=== url|| pathname?.startsWith(`${url}/`) )

  const onClick = () =>{
    router.push(url)
  }
    return(
    <button onClick={onClick} className={cn('flex items-center gap-x-2 text-slate-600 text-sm font-[500] pl-6 transition-all hover:text-slate-900 hover:bg-slate-300/20',
    isActive && 'text-sky-500 bg-sky-200/20 hover:bg-sky-300/20 hover:text-sky-800 border-r-2 border-sky-700'
  )}>
    <div className="flex items-center gap-x-2 py-4">
      <Icon size={22} className={cn("text-slate-600", isActive && "text-sky-700")}/>
      {name}
    </div>
  </button>
)
}

let SidebarRoutes = [
  
  {
    icon:LayoutDashboard,
    name:"DashBoard",
    url:"/admin/dashboard"
  },
  {
    icon:GraduationCap,
    name:"Courses",
    url:"/admin/courses"
  },
  {
  icon: User,
  name:"Student",
  url:"/admin/student"
  },
  {
    icon:List,
    name:"Admission",
    url:"/admin/admission"
  },
  {
    icon :Filter,
    name:"Categories",
    url:"/admin/categories"
  },
  {
    icon:IndianRupee,
    name:"Payment",
    url:"/admin/payment"
  }
]
const MenuBar= ()=>{
    return (
      <header className="py-2">
      <div className="">   
          <nav className="text-gray-800 w-full flex flex-col">
            {
              SidebarRoutes.map((side, i )=><SidebarItem key={i} {...side}/>)
            }
          </nav>
      </div>
  </header>
 ) 
}
 export default MenuBar;