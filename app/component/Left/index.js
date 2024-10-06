
import { Bike, House, Layers3, LogOut, TicketSlash, UserRound, Wrench } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"


function Left() {

    const router = useRouter()

    async function handleLogout(){
        const response = await axios.get("http://localhost:3000/api/logout")
        if(response.data.success === true){
            router.push('/login')
        }
    }

    return (
        <>
            <div className="lg:w-96 p-6 border border-zinc-900 rounded-lg ">
                <Accordion type="single" collapsible className="w-full">
                    <Link href="/admin/dashboard"><AccordionItem value="item-1" className='flex justify-start items-center gap-1 text-lg h-12 border-zinc-900'><House size={18} />DashBoard</AccordionItem></Link>
                    <Link href="/admin/users"><AccordionItem value="item-2" className='flex justify-start items-center gap-1 text-lg h-12 border-zinc-900'><UserRound size={18} />Users</AccordionItem></Link>
                    <AccordionItem value="item-3" className='border-zinc-900'>
                        <AccordionTrigger><span className="flex items-center gap-1"><Bike />Bikes</span></AccordionTrigger>
                        <AccordionContent>
                            Show Bike
                        </AccordionContent>
                        <AccordionContent>
                            Add Bike
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='border-zinc-900'>
                        <AccordionTrigger><span className="flex gap-1 items-center"><Wrench size={18} />Parts</span></AccordionTrigger>
                        <AccordionContent>
                            Show Part
                        </AccordionContent>
                        <AccordionContent>
                            Add Part
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className='border-zinc-900'>
                        <AccordionTrigger><span className="flex gap-1 items-center"><Layers3 size={18} />Categories</span></AccordionTrigger>
                        <AccordionContent>
                            Category
                        </AccordionContent>
                        <AccordionContent>
                            Sub-Category
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6" className='flex justify-start items-center gap-1 text-lg h-12 border-zinc-900'><TicketSlash size={18} />Banner</AccordionItem>
                    <AccordionItem value="item-7" onClick={() => { handleLogout() }} className='flex justify-start items-center gap-1 text-lg h-14 border-zinc-900 cursor-pointer'><LogOut size={18} />Logout</AccordionItem>
                </Accordion>
            </div>
        </>
    );
}

export default Left;