import connectToDB from "@/database"
import Auth from "@/models/auth"
import { NextResponse } from "next/server"
import argon2 from "argon2"
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers"

connectToDB()

export async function POST(req){
    try{
        const data = await req.json()
        const {email,password} = data
        const userCheck = await Auth.findOne({email})        
        if(userCheck !== null){
            const comparePassword = await argon2.verify(userCheck.password,password)
            if(comparePassword){
                let payload = {
                    email : userCheck.email
                }
                const token = jwt.sign(payload,process.env.TOKEN_SECRET,{ expiresIn: '1h' })
                const getCookies = cookies()
                getCookies.set("token",token)
                return NextResponse.json({
                    success:true,
                    role:userCheck.is_Admin
                })
            }else{
                return NextResponse.json({success:false,message:"Wrong Password!"})
            }
        }else{
            return NextResponse.json({success:false,message:"Wrong Email ID!"})
        }
    }catch(error){
        console.log(error);
        return NextResponse.json({success:false,error:"Something Went Wrong. Please Try Again!"})
    }
}