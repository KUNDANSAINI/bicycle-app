import connectToDB from "@/database";
import Auth from "@/models/auth";
import { NextResponse } from "next/server";
import argon2 from "argon2";

connectToDB()

export async function POST(req){
    try {
        const data = await req.json()
        const { fullName, email, password, mobile } = data   
        const userCheck = await Auth.findOne({ email })
        if (userCheck) {
            return NextResponse.json({
                success: false,
                message: "User Already Exists!"
            })
        }
        const hashPassword = await argon2.hash(password,10)
        const newRecord = await Auth.create({ fullName, email, password: hashPassword, mobile})        
        if (newRecord) {
            return NextResponse.json({
                success: true,
                message: "SuccessFully Created!"
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Something Went Wrong. Please Try Again!"
            })
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Somthing Went Wrong. Please Try Again!"
        })
    }
}