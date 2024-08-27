import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'
import SideBar from './SideBar'

const MobileNavBarr = () => {
  return (
   <Sheet>
    <SheetTrigger className='md:hidden flex'>
        <Menu/>
    </SheetTrigger>
    <SheetContent side="left"  className="p-0 bg-white w-72">
        <SideBar/>
    </SheetContent>
   </Sheet>
  )
}

export default MobileNavBarr