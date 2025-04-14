import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userID } = getAuth(req);
        const { chatID } = await req.json();

        if (!userID) {
            return NextResponse.json({ success: false, message: "User not authenticated" });
        }

        // Connect to the database and delete the chat
        await connectDB();
        await Chat.deleteOne({ _id: chatID, userID });
        return NextResponse.json({ success: true, message: "Chat deleted successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}