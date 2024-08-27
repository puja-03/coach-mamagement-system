"use client"
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import {FcBrokenLink, FcDisplay, FcEngineering, FcMultipleDevices, FcMusic, FcSalesPerformance, FcSportsMode} from "react-icons/fc";


const CategoryItem = ({label,icon:Icon,key,value})=>{
    const [isSelect , setIsSelect]= useState(false);
    return (
   <button onClick={() =>{}} className={cn("py-2 px-3 text-sm border border-slate-300 rounded-full flex gap-x-1 hover:border-sky-700 transition ",
    isSelect&& "border-sky-700 bg-sky-200/20 text-sky-800 dark:text-sky-100")} type='button'>
        { Icon && <Icon size={20}/>}
         <div className='truncate'>
            {label}
         </div>
         </button>
        )
}
const IconMap = {
    "web Designing": FcMultipleDevices,
    "web Music":FcMusic,
    "web Sports":FcSportsMode,
    "web Bussiness":FcBrokenLink,
    "computer Science":FcDisplay,
    "Accounting":FcSalesPerformance,
    "Fitness":FcSportsMode,
    "Engineering":FcEngineering,
}
const Categories = ({items}) => {
  return (
    <div className='flex items-center gap-x-2  overflow-x-auto pb-2 my-5'>
       {items.map(item =>(
        <CategoryItem key={item._id} label={item.name} icon={IconMap[item.name]} value={item._id}/>
       ))}
    </div>
  )
}

export default Categories

