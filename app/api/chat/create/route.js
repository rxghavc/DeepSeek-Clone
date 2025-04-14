import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const {userID} = getAuth(req);

        if (!userID) {
            return NextResponse.json({success: false, message: "User not authenticated",});
        }
        //Prepare the chat to be saved in the database
        const chatData = {
            userID,
            mmessages: [],
            name: "New Chat",
        };
        //Connect to the database
        await connectDB();
        await Chat.create(chatData);
        return NextResponse.json({success: true, message: "Chat created successfully",});
    } catch (error) {
        return NextResponse.json({success: false, error: error.message});
    }
}