import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"



export async function GET(){
    try{
        const getCookies = cookies()
        const token = getCookies.get("token").value || ""
        const verifyToken = await jwt.verify(token,process.env.TOKEN_SECRET)
        if(!verifyToken){
            return NextResponse.json({success:false,message:"Something Went Wrong. Please Try Again!"})
        }
        return NextResponse.json({success:true,verifyToken})
    }catch(error){
        console.log(error);
        return NextResponse.json({success:false,message:"Bad Request!"})
    }
}