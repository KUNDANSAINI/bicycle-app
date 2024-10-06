'use client'

import { Button } from "@/components/ui/button";
import Footer from "../Footer";
import Header from "../Header";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react";
import { SliderImage } from "@/app/utils";
import { Filter } from "lucide-react";

function HomePage() {

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <>
            <Header />
            <div>
                {/* Banner For Cycle */}
                <div className="w-full mt-4">
                    <Carousel
                        plugins={[plugin.current]}
                    >
                        <CarouselContent>
                            {SliderImage.map((val, index) => (
                                <CarouselItem key={index}>
                                    <img src={val.src} alt={val.alt} className="w-full h-[700px] object-cover" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="ml-[60px]" />
                        <CarouselNext className="mr-[60px]" />
                    </Carousel>
                </div>

                {/* Category for bicycle */}

                <div className=" mx-4 lg:mx-72 mt-12">
                    <h2 className="text-3xl font-semibold">Categories</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 rounded-lg gap-4 mt-4">
                        <div className=" relative h-[180px] shadow-2xl transition-transform hover:-translate-y-2 duration-500 cursor-pointer">
                            <img src="https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain img" className="w-full h-full object-cover" />
                            <div className="flex justify-center items-center absolute w-full h-8 bg-[#171717] text-sky-400 -mt-6">
                                <h2 className="font-semibold">Mountain</h2>
                            </div>
                        </div>
                        <div className=" relative h-[180px] shadow-2xl transition-transform hover:-translate-y-2 duration-500 cursor-pointer">
                            <img src="https://images.pexels.com/photos/5807684/pexels-photo-5807684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gravel img" className="w-full h-full object-cover" />
                            <div className="flex justify-center items-center absolute w-full h-8 bg-[#171717] text-sky-400 -mt-6">
                                <h2 className="font-semibold">Gravel</h2>
                            </div>
                        </div>
                        <div className="relative h-[180px] shadow-2xl transition-transform hover:-translate-y-2 duration-500 cursor-pointer">
                            <img src="https://images.pexels.com/photos/5687426/pexels-photo-5687426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="road img" className="w-full h-full object-cover" />
                            <div className="flex justify-center items-center absolute w-full h-8 bg-[#171717] text-sky-400 -mt-6">
                                <h2 className="font-semibold">Road</h2>
                            </div>
                        </div>
                        <div className="relative h-[180px] shadow-2xl transition-transform hover:-translate-y-2 duration-500 cursor-pointer">
                            <img src="https://images.pexels.com/photos/19345330/pexels-photo-19345330/free-photo-of-legs-of-man-on-bike.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="city img" className="w-full h-full object-cover" />
                            <div className="flex justify-center items-center absolute w-full h-8 bg-[#171717] text-sky-400 -mt-6">
                                <h2 className="font-semibold">City</h2>
                            </div>
                        </div>
                        <div className="relative h-[180px] shadow-2xl transition-transform hover:-translate-y-2 duration-500 cursor-pointer">
                            <img src="https://images.pexels.com/photos/4224423/pexels-photo-4224423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kids img" className="w-full h-full object-cover" />
                            <div className=" absolute w-full h-8 flex items-center justify-center bg-[#171717] text-sky-400 -mt-6">
                                <h2 className="font-semibold">Kids</h2>
                            </div>
                        </div>
                        <div className="relative h-[180px] shadow-2xl transition-transform hover:-translate-y-2 duration-500 cursor-pointer">
                            <img src="https://images.pexels.com/photos/15020741/pexels-photo-15020741/free-photo-of-a-woman-riding-a-bicycle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="e-bike" className="w-full h-full object-cover" />
                            <div className="flex justify-center items-center absolute w-full h-8 bg-[#171717] -mt-6 text-sky-400">
                                <h2 className="font-semibold">E-bike</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Item Start */}

                <div className="flex flex-row justify-between mx-4 lg:mx-72 mt-12">
                    <div>
                        <h2 className="text-3xl font-semibold">Products</h2>
                    </div>
                    <div className="flex gap-4">
                        <Button className="font-semibold"><Filter size={16} className="me-1" />Filter</Button>
                        <Button className="font-semibold">See More</Button>
                    </div>
                </div>

                <div className="border border-zinc-900 flex flex-col lg:flex-row justify-evenly rounded-lg mx-4 lg:mx-72 mt-1 cursor-pointer">
                    <div className="h-full lg:h-[300px] p-4">
                        <img src="https://images.bikesonline.com/assets/full/4885599.jpg?20240613130700&tr=w-750,h-462,cm-pad_resize,bg-FFFFFF" alt="cycle" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-6 lg:px-0">
                        <h2 className="flex flex-wrap text-xl font-bold">2024 Polygon Siskiu T7 Dual Suspension Mountain Bike</h2>
                        <ul className="list-disc mt-8">
                            <li>ALX Trail 6061 Aluminum Frame 135/140mm Travel </li>
                            <li>Rockshox Recon RL, 150mm (27.5) / 140mm (29) Travel </li>
                            <li>Rockshox Deluxe Select Plus, Debon Air </li>
                            <li>Shimano Deore M6100 12 Speed Drivetrain </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5 lg:mt-0">
                        <p className="text-xl text-rose-600 font-bold">$1,699.00</p>
                        <p className="line-through text-gray-500 text-xl font-bold">$1,999.00</p>
                        <p className="text-blue-500">4.6 - 928 Reviews</p>
                        <Button className='mt-1'>Add To Cart</Button>
                    </div>
                </div>

                <div className="border border-zinc-900 flex flex-col lg:flex-row justify-evenly rounded-lg mx-4 lg:mx-72 mt-12 cursor-pointer">
                    <div className="h-full lg:h-[300px] p-4">
                        <img src="https://images.bikesonline.com/assets/full/4885111.jpg?20240624111419&tr=w-750,h-462,cm-pad_resize,bg-FFFFFF" alt="cycle" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-6 lg:px-0">
                        <h2 className="flex flex-wrap text-xl font-bold">2024 Polygon Siskiu T8 Dual Suspension Mountain Bike</h2>
                        <ul className="list-disc mt-8">
                            <li>ALX Trail 6061 Aluminum Frame 135/140mm Travel </li>
                            <li>Fox 34 Rhythm, 150mm (27.5) / 140mm (29) Travel</li>
                            <li>Fox Float DPS, Evol LV Air Spring, Rebound Adjuster </li>
                            <li>Shimano SLX M7100 12 Speed Drivetrain </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5 lg:mt-0">
                        <p className="text-xl text-rose-600 font-bold">$1,999.00</p>
                        <p className="line-through text-gray-500 text-xl font-bold">$2,399.00</p>
                        <p className="text-blue-500">4.7 - 659 Reviews</p>
                        <Button className='mt-1'>Add To Cart</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;