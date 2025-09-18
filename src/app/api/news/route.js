import Parser from "rss-parser";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    // The limit has been removed to fetch all articles for client-side pagination.
    const parser = new Parser({
      customFields: {
        item: ["media:content"],
      },
    });

    const feed = await parser.parseURL("https://on.ge/rss");

    const articles = feed.items.map((item) => ({
      title: item.title || "",
      link: item.link || "",
      contentSnippet: item.contentSnippet || "",
      isoDate: item.isoDate || new Date().toISOString(),
      enclosure: {
        url:
          item.enclosure?.url ||
          item["media:content"]?.$?.url || 
          "https://placehold.co/400x200/e6f3ff/1b375d?text=No+Image",
      },
    }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch news from on.ge" },
      { status: 500 }
    );
  }
}
