import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userID } = getAuth(req);
        if (!userID) {
            return NextResponse.json({ success: false, message: "User not authenticated" });
        }
        const { chatID, name } = await req.json();
        //Connect to DB and update the chat name
        await connectDB();
        await Chat.findOneAndUpdate({_id: chatID, userID}, {name});
        return NextResponse.json({ success: true, message: "Chat renamed successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}