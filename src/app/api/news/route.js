import Parser from "rss-parser";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get("limit");

    const parser = new Parser({
      customFields: {
        item: ["media:content"],
      },
    });

    const feed = await parser.parseURL("https://on.ge/rss");

    let items = feed.items;

    
    if (limitParam) {
      const limit = parseInt(limitParam, 10);
      items = items.slice(0, limit);
    }

    const articles = items.map((item) => ({
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

