import OpenAI from "openai";

// Initialize OpenAI with DeepSeek API key
const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.DEEPSEEK_API_KEY, // make sure to setup your own env file with a new generated key
});

export async function POST(req) {
    try {
        const { userID } = getAuth(req);
    } catch (error) {
        
    }

}