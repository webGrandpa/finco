//chat/route.


import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function POST(request) {
  try {
    const { history, message } = await request.json();

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json({ error: "Failed to get response from AI" }, { status: 500 });
  }
}