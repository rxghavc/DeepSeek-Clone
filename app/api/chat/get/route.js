import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const { userID } = getAuth(req);
        if (!userID) {
            return NextResponse.json({ success: false, message: "User not authenticated" });
        }
        await connectDB();
        const data = await Chat.find({userID});
        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}