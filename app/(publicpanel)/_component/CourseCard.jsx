import IconBadge from "@/components/icon-badge";
import { formatDuration, formatPrice } from "@/lib/format";
import { Clock, ListChecks, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

//course.category.name

const CourseCard = ({ key ,image,id,title,fees,seats,category,prerequisites,duration }) => {
    return (
     <Link href={`course/${id}`}>
        <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg  h-full">
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
               <Image  fill className="object-cover" alt={title} src={image}/>
            </div>
            <div className="flex flex-col p-3 pt-2">
                <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition dark:group-hover:text-sky-500">
                    {title}
                </div>
                <p className="text-xs text-muted-forground">
                    {category}
                </p>
                <div className="mt-3 flex items-center  gap-x-2 text-sm md:texte-xs">
                    <div className="flex items-center gap-x-1 text-slate-500">
                        <IconBadge size="sm" icon={UserCheck} />
                        <span>
                            {seats} Seats Only
                        </span>
                    </div>
                    <div className="flex items-center gap-x-1 text-slate-500">
                        <IconBadge size="sm" icon={Clock} />
                        <span>
                            {formatDuration(duration)}
                        </span>
                    </div>
                    
                </div>
                <div className="mt-3 flex items-center  gap-x-2 text-sm md:texte-xs">
                    <div className="flex items-center gap-x-1 text-slate-500">
                        <IconBadge size="sm" icon={ListChecks} />
                        <span>
                    {prerequisites}
                        
                        </span>
                    </div>
                    
                    
                </div>
                {/* display fees */}
                <p className="text-md md:text-sm font-medium text-slate-700">
                    {formatPrice(fees)}
                </p>
            </div>
        </div>
    </Link>
    );
};

export default CourseCard;