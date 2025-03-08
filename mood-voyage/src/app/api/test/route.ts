import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
    try {
        const { db } = await connectToDatabase()

        await db.collection("users").insertOne({ test: "Hello MongoDB!" })
        
        return NextResponse.json({ message: "MongoDB Connected! Database Created!" })
    } catch (error) {
        const err= error as Error
        return NextResponse.json({ error: "MongoDB Connection Failed!", details: err.message}, {status: 500})
        }
        
    }