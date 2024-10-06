'use client'

import { AlignJustify, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useRouter } from "next/navigation";
import Link from "next/link";


function Header() {
    const [openToggle, setOpenToggle] = useState(false)
    const router = useRouter()


    return (
        <>
            <header>
                <div>
                    <div className="flex h-[80px] items-center justify-between mx-4 lg:mx-48">
                        <h1 onClick={() => router.push('/')} className="text-3xl font-bold cursor-pointer">Bicycle</h1>
                        <div className="cursor-pointer">
                            <AlignJustify onClick={() => setOpenToggle(!openToggle)} className="lg:hidden" />
                        </div>

                        {/* Large Device */}

                        <ul className="hidden lg:flex gap-10 font-semibold cursor-pointer">
                            <Button variant="link" className="font-semibold text-white text-lg"><Link href={'/'}>Home</Link></Button>

                            {/* Bikes Navbar */}
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button className="font-semibold text-white text-lg" variant="link">Bikes</Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-auto flex gap-8">
                                    <div className="flex flex-col">
                                        <h2 className=" text-xl py-2 text-gray-800">MOUNTAIN</h2>
                                        <ul>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500 ">Hardtail</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">eMountain</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Downhill</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">DartJump</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className=" text-xl py-2 text-gray-800">ROAD</h2>
                                        <ul>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">All Road</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Performance</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className=" text-xl py-2 text-gray-800">CITY</h2>
                                        <ul>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Cargo</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Fitness & Urban</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">eUrban</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Comfort</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className=" text-xl py-2 text-gray-800">KIDES</h2>
                                        <ul>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Age 5 To 8</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Age 7 To 12</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Age 12 To Teen</li>
                                        </ul>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>

                            {/* Parts Navbar */}

                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button className="font-semibold text-white text-lg" variant="link">Parts</Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-auto flex gap-8">
                                    <div className="flex flex-col">
                                        <h2 className=" text-xl py-2 text-gray-800">BRAKE PARTS</h2>
                                        <h3 className=" text-md py-2 text-gray-800 hover:text-sky-500">Cockpit</h3>
                                        <ul>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500 ">Grips and Tapes</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500 ">Handlebars</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500 ">Seatpost & Droppers</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500 ">Stems</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className=" text-xl py-2 text-gray-800">Drivetrain</h2>
                                        <ul>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Cassettes</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Chains & Quick Links</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Shifters</li>
                                        </ul>
                                        <h3 className=" text-md py-2 text-gray-800 hover:text-sky-500">E-Bike Parts</h3>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className=" text-xl py-2 text-gray-800">Pedals</h2>
                                        <ul>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Clip-in</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Flat</li>
                                        </ul>
                                        <h2 className=" text-xl py-2 text-gray-800">Suspension</h2>
                                        <ul>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Shocks</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Forks</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className=" text-xl py-2 text-gray-800">Tires & Tubes</h2>
                                        <ul>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Inner Tubes</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Tires</li>
                                            <li className="py-1 text-sm text-gray-500 hover:text-sky-500">Tubeless & Valves</li>
                                        </ul>
                                        <h3 className=" text-md py-2 text-gray-800 hover:text-sky-500">Wheels</h3>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>

                            {/* Brands Navbar */}

                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button className="font-semibold text-white text-lg" variant="link">Brands</Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-auto">
                                    <div className="grid grid-cols-4 gap-10">
                                        <div className="flex justify-center h-[80px]">
                                            <img src="https://images.bikesonline.com/assets/webshop/cms/08/108.jpg?1559860738" className="w-auto h-full object-cover" />
                                        </div>
                                        <div className="flex justify-center h-[80px]">
                                            <img src="https://images.bikesonline.com/assets/webshop/cms/35/1535.png?1712896863" className="w-auto h-full object-cover" />
                                        </div>
                                        <div className="flex justify-center h-[80px]">
                                            <img src="https://images.bikesonline.com/assets/webshop/cms/06/106.jpg?1559860722" className="w-auto h-full object-cover" />
                                        </div>
                                        <div className="flex justify-center h-[80px]">
                                            <img src="https://images.bikesonline.com/assets/webshop/cms/48/948.png?1722962524" className="w-auto h-full object-cover" />
                                        </div>
                                        <div className="flex justify-center h-[80px]">
                                            <img src="https://images.bikesonline.com/assets/webshop/cms/59/1559.png?1722962285" className="w-auto h-full object-cover" />
                                        </div>
                                        <div className="flex justify-center h-[80px]">
                                            <img src="https://images.bikesonline.com/assets/webshop/cms/11/1411.png?1701308737" className="w-auto h-full object-cover" />
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>

                            <Button variant="link" className="font-semibold text-white text-lg" onClick={() => navigate('/account')}>Account</Button>
                            <Button variant="link" className="font-semibold text-white text-lg" onClick={() => navigate('/cart')} ><ShoppingCart /></Button>
                            <Button variant="link" className="font-semibold text-white text-lg" ><Link href={'/login'}>Login</Link></Button>
                            <Button variant="link" className="font-semibold text-white text-lg" ><Link href={'/signup'}>Signup</Link></Button>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Small Device */}

            <div className={`${openToggle ? 'transition-transform translate-x-0  duration-500 w-[300px] fixed top-0 right-0 h-full bg-slate-100 z-50' : 'hidden'} `} >
                <div className="flex justify-between items-center mt-6 mx-4 cursor-pointer">
                    <h2 className="text-xl font-bold ">Bicycle</h2>
                    <X onClick={() => setOpenToggle(false)} />
                </div>
                <ul className="flex flex-col font-semibold cursor-pointer ml-5 mt-4 gap-5">

                    <li>Home</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Account</li>
                    <li onClick={() => navigate('/login')} >Login</li>
                    <li onClick={() => navigate('/signup')} >Signup</li>
                </ul>
            </div>
        </>
    );
}

export default Header;