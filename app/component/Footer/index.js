'use client'


import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
    return (
        <>
            <footer>
                <div className='mt-8 border-t border-zinc-900'>
                    <div className="grid grid-cols-2 lg:grid-cols-4 pt-5 mx-4 lg:mx-48 border-b border-zinc-900">
                        <div>
                            <h2 className="text-md text-sky-500 font-bold">Information</h2>
                            <ul className='py-5 cursor-pointer'>
                                <li className='hover:text-sky-500 font-semibold my-2'>Home</li>
                                <li className=' hover:text-sky-500 font-semibold my-2'>About us</li>
                                <li className=' hover:text-sky-500 font-semibold my-2'>Contact us</li>
                                <li className=' hover:text-sky-500 font-semibold my-2'>Privacy Policy</li>
                                <li className=' hover:text-sky-500 font-semibold my-2'>Terms & Conditions</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-md text-sky-500 font-bold">Help</h2>
                            <ul className='py-5 cursor-pointer'>
                                <li className=' hover:text-sky-500 font-semibold my-2'>Help Center</li>
                                <li className=' hover:text-sky-500 font-semibold my-2'>Shipping</li>
                                <li className=' hover:text-sky-500 font-semibold my-2'>Warranty</li>
                                <li className=' hover:text-sky-500 font-semibold my-2'>Blog</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-md text-sky-500 font-bold">Connected With Us</h2>
                            <ul className='flex py-5 cursor-pointer gap-3'>
                                <li className='hover:text-sky-500'><Facebook size={'32'} /></li>
                                <li className='hover:text-sky-500'><Instagram size={"32"} /></li>
                                <li className='hover:text-sky-500'><Twitter size={"32"} /></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-md text-sky-500 font-bold">Secure Online Shopping</h2>
                            <div className='grid grid-cols-3 gap-5 mt-4'>
                                <div>
                                    <img src='https://assets.netostatic.com/assets/neto-cdn/payment-icons/1.0.0/paypal_checkout.svg' className='w-16 cursor-pointer' />
                                </div>
                                <div>
                                    <img src='https://assets.netostatic.com/assets/neto-cdn/payment-icons/1.0.0/applepay.svg' className='w-16 cursor-pointer' />
                                </div>
                                <div>
                                    <img src='https://assets.netostatic.com/assets/neto-cdn/payment-icons/1.0.0/visa.svg' className='w-16 cursor-pointer' />
                                </div>
                                <div>
                                    <img src='https://assets.netostatic.com/assets/neto-cdn/payment-icons/1.0.0/googlepay.svg' className='w-16 cursor-pointer' />
                                </div>
                            </div>

                        </div>
                    </div>
                        <div>
                            <p className='text-center text-xs py-6 font-semibold'>Copyright © 2024 Bikes Online</p>
                        </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;