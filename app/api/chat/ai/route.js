export const maxDuration = 60;
import OpenAI from "openai";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Chat from "@/models/Chat";
import connectDB from "@/config/db";

// Initialize OpenAI with DeepSeek API key
const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.DEEPSEEK_API_KEY, // make sure to setup your own env file with a new generated key
});

export async function POST(req) {
    try {
        const { userID } = getAuth(req);
        // Extract chatID and prompt from the request body
        const { chatID, prompt } = await req.json();
        if (!userID) {
            return NextResponse.json({success: false, message: "User not authenticated",});
        }

        // Find the chat document in the DB based on chatID and userID
        await connectDB();
        const data = await Chat.findOne({userID, _id: chatID});

        // Create a user message object
        const userPrompt = {
            role: "user",
            content: prompt,
            timestamp: Date.now(),
        }
        data.messages.push(userPrompt); // Push the user message to the chat messages array

        // Call the DeepSeek API to get a chat completion
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "deepseek-chat",
            store: true
        });

        const message = completion.choices[0].message; // Extract the message from the API response
        message.timestamp = Date.now();
        data.messages.push(message);
        data.save();
        return NextResponse.json({
            success: true,
            data: message,
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
        });
    }

}