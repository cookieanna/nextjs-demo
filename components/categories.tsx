"use client"
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
interface CategoriesProps {
    data: Category[]
}
export const Categories = ({data}:CategoriesProps) => {
const router = useRouter()
const searchParams = useSearchParams()
const categoriyId = searchParams.get("categoriyId")
const onClick = (id:string|undefined)=>{
const query ={categoriyId:id}
const url = qs.stringifyUrl({
    url:window.location.href,
    query:query
},{skipNull:true})
router.push(url)
}
    return (
        <div className="w-full overflow-x-auto space-x-2 flex p-1">
            <button onClick={()=>onClick(undefined)} className={cn(`
                flex
                items-center
                text-center
                text-xs
                md:text-sm
                px-2
                md:px-4
                py-2
                md:py-3
                rounded-md
                bg-primary/10
                hover:opacity-75
                transition
                `,!categoriyId?"bg-primary/25":"bg-primary/10")}>newest
                </button>
                {data.map((item)=>(
                    <button onClick={()=>onClick(undefined)} key={item.id} className={cn(`
                flex
                items-center
                text-center
                text-xs
                md:text-sm
                px-2
                md:px-4
                py-2
                md:py-3
                rounded-md
                bg-primary/10
                hover:opacity-75
                transition
                `,item.id ===categoriyId?"bg-primary/25":"bg-primary/10")}>{item.name}
                </button>
                ))}
        </div>
    );
}
