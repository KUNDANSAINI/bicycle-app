import connectToDB from "@/database";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

connectToDB()

export async function GET(){
    try{
        const getCookies = cookies()
        getCookies.set("token","")
        return NextResponse.json({success:true,message:"Successfully Logout!"})
    }catch(error){
        console.log(error);
        return NextResponse.json({success:false, message:"Bad Request"})
    }
}