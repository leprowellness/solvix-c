import connectDB from "@/lib/database/connectDbs";
import Portfolio from "@/lib/models/portfolioModel";
import { NextRequest, NextResponse } from "next/server";

// GET single portfolio item
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Portfolio ID is required" },
        { status: 400 }
      );
    }

    const portfolio = await Portfolio.findById(id);
    if (!portfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: portfolio },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}

// PUT update portfolio item
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const updateData = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Portfolio ID is required" },
        { status: 400 }
      );
    }

    const portfolio = await Portfolio.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!portfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Portfolio item updated successfully",
        data: portfolio,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating portfolio:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update portfolio" },
      { status: 500 }
    );
  }
}

// DELETE portfolio item
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    console.log("DELETE: Received ID:", id, "Type:", typeof id);

    if (!id) {
      console.error("DELETE: No ID provided");
      return NextResponse.json(
        { success: false, message: "Portfolio ID is required" },
        { status: 400 }
      );
    }

    console.log("DELETE: Attempting to delete portfolio with ID:", id);
    const portfolio = await Portfolio.findByIdAndDelete(id);
    console.log("DELETE: Result:", portfolio);
    
    if (!portfolio) {
      console.error("DELETE: Portfolio not found for ID:", id);
      return NextResponse.json(
        { success: false, message: "Portfolio item not found" },
        { status: 404 }
      );
    }

    console.log("DELETE: Successfully deleted portfolio");
    return NextResponse.json(
      {
        success: true,
        message: "Portfolio item deleted successfully",
        data: portfolio,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE: Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete portfolio", error: String(error) },
      { status: 500 }
    );
  }
}
