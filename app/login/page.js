'use client'

import { Lock, LockOpen } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Header from "../component/Header";
import { toast } from "@/hooks/use-toast";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const router = useRouter()

    function handlepassword() {
        setShowPassword(!showPassword)
    }

    async function handleform(e) {
        e.preventDefault()
        const data = { email, password }
        if (!email) {
            toast.error("Please Enter A Email")
        }
        else if (!email.includes("@")) {
            toast.error("Please Enter A Valid Email")
        }
        else if (!password) {
            toast.error("Enter Your Password")
        }
        const response = await axios.post('http://localhost:3000/api/login',data)        
        if(response.data.success === true){
            if(response.data.role === true){
                router.push("/admin/dashboard")
            }else{
                router.push("/")
            }
        }else{
            toast({
                variant: "destructive",
                title: response.data.message
            })
        }
    }

    return (
        <>
            <Header />
            <div className="w-full h-[80vh] flex justify-center items-center">
                <div className="w-[400px] border border-zinc-900 rounded-md">
                    <div className="p-4">
                        <h2 className="text-4xl font-semibold text-center mb-8">Login</h2>
                        <form onSubmit={(e) => { handleform(e) }}>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border-zinc-900 sm:text-sm"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </div>
                                <div>
                                    <div className="flex">
                                        <Input
                                            name="password"
                                            type={
                                                showPassword ? "text" : "password"
                                            }
                                            placeholder="Password"
                                            className="w-full border-zinc-900 sm:text-sm"
                                            value={password}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                        />
                                        <div className="flex items-center">
                                            {
                                                !showPassword ?
                                                    <Lock onClick={handlepassword} size={18} className="-ml-9 cursor-pointer" />
                                                    : <LockOpen onClick={handlepassword} size={18} className="-ml-9 cursor-pointer" />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button type="submit" className="hover:bg-white hover:text-black w-full h-9 sm:text-sm mt-8 mb-2">Login</Button>
                            <hr className="my-4 border-zinc-900" />
                        </form>
                        <Button onClick={() => { router.push('/signup') }} className="hover:bg-white hover:text-black w-full h-9 sm:text-sm my-1">Create New Account</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;