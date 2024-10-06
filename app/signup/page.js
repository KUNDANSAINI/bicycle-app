'use client'

import { Lock, LockOpen } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Header from "../component/Header";

function Signup() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        mobile: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const { toast } = useToast()

    const router = useRouter()

    function handlepassword() {
        setShowPassword(!showPassword)
    }

    async function handleform() {
        const { fullName, email, password, mobile } = formData

        if (!fullName) {
            toast({
                variant: "destructive",
                title: "Please Enter Your Name!"
            })
        }
        else if (!email) {
            toast({
                variant: "destructive",
                title: "Please Enter Your Email!"
            })
        }
        else if (!email.includes("@")) {
            toast({
                variant: "destructive",
                title: "Please Enter A Valid Email!"
            })
        }
        else if (!password) {
            toast({
                variant: "destructive",
                title: "Please Enter A Password!"
            })
        }
        else if (!mobile) {
            toast({
                variant: "destructive",
                title: "Please Enter Your Mobile Number!"
            })
        } else {
            const res = await axios.post("http://localhost:3000/api/signup",formData)            
            if (res.data.success === true) {
                router.push('/login')
                toast({
                    title: "Your Account Has SuccessFully Created. Please Login!"
                })
            }else{
                toast({
                    variant: "destructive",
                    title: "Something Went To Wrong. Please Try Again!"
                })
            }
        }
    }

    return (
        <>
            <Header />
            <div className="w-full h-[80vh] flex justify-center items-center">
                <div className="w-[400px] border border-zinc-900 rounded-md">
                    <div className="p-4">
                        <h2 className="text-4xl font-semibold text-center mb-8">Sign Up</h2>
                        <form action={handleform}>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <Input
                                        name="fname"
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full border-zinc-900 sm:text-sm"
                                        value={formData.fullName}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                fullName: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border-zinc-900 sm:text-sm"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                email: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div className="flex">
                                    <Input
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Password"
                                        className="w-full border-zinc-900 sm:text-sm"
                                        value={formData.password}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                password: e.target.value
                                            })
                                        }}
                                    />
                                    <div className="flex items-center">
                                        {
                                            !showPassword ?
                                                <Lock onClick={handlepassword} size={18} className="-ml-9 cursor-pointer" />
                                                : <LockOpen onClick={handlepassword} size={18} className="-ml-9 cursor-pointer" />
                                        }
                                    </div>
                                </div>
                                <div>
                                    <Input
                                        name="mobile"
                                        type="number"
                                        placeholder="Mobile No."
                                        className="w-full border-zinc-900 sm:text-sm"
                                        value={formData.mobile}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                mobile: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            <Button type="submit" className="hover:bg-white hover:text-black w-full h-9 sm:text-sm mt-8 mb-2">Sign Up</Button>
                            <hr className="my-4 border-zinc-900" />
                        </form>
                        <Button onClick={() => { router.push('/login') }} className="hover:bg-white hover:text-black w-full h-9 sm:text-sm mb-2">Already have account</Button>                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;