//chat/route.


import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_LENGTH = 50;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

export async function POST(request) {
  try {
    // Validate API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "AI service is not configured" },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { history, message } = body;

    // Validate message
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    if (message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message cannot be empty" },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or less` },
        { status: 400 }
      );
    }

    // Validate history
    if (history !== undefined && !Array.isArray(history)) {
      return NextResponse.json(
        { error: "History must be an array" },
        { status: 400 }
      );
    }

    const safeHistory = Array.isArray(history)
      ? history.slice(0, MAX_HISTORY_LENGTH)
      : [];

    const chat = model.startChat({ history: safeHistory });
    const result = await chat.sendMessage(message.trim());
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Error in chat API:", error);
    // Never leak internal error details to the client
    return NextResponse.json(
      { error: "Failed to get response from AI" },
      { status: 500 }
    );
  }
}