import connectDB from "@/lib/database/connectDbs";
import Portfolio, { PortfolioObject } from "@/lib/models/portfolioModel";
import { NextRequest, NextResponse } from "next/server";

function isPortfolioData(object: unknown): object is PortfolioObject {
  if (object === null || object === undefined) return false;
  if (typeof object !== "object") return false;
  if (Array.isArray(object)) return false;

  const obj = object as Record<string, unknown>;

  return (
    typeof obj.title === "string" &&
    obj.title.trim() !== "" &&
    typeof obj.description === "string" &&
    obj.description.trim() !== "" &&
    typeof obj.imageUrl === "string" &&
    obj.imageUrl.trim() !== ""
  );
}

// GET all portfolio items or featured only
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const featured = searchParams.get("featured");

    let query = {};
    if (featured === "true") {
      query = { featured: true };
    }

    const portfolios = await Portfolio.find(query).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: portfolios.length,
        data: portfolios,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch portfolios",
      },
      { status: 500 }
    );
  }
}

// POST new portfolio item
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const portfolioData = await req.json();

    if (!isPortfolioData(portfolioData)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid portfolio data. Please provide all required fields.",
        },
        { status: 400 }
      );
    }

    const { title, description, imageUrl, liveLink, category, technologies, featured } =
      portfolioData;

    const newPortfolio = await Portfolio.create({
      title,
      description,
      imageUrl,
      liveLink,
      category: category || "Web Development",
      technologies: technologies || [],
      featured: featured || false,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Portfolio item created successfully",
        data: newPortfolio,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating portfolio:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to create portfolio item",
      },
      { status: 500 }
    );
  }
}
