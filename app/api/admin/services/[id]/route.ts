import connectDB from "@/lib/database/connectDbs";
import Service from "@/lib/models/serviceModel";
import { NextRequest, NextResponse } from "next/server";

// GET single service
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;

    const service = await Service.findById(id);
    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: service },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch service" },
      { status: 500 }
    );
  }
}

// PUT update service
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    const updateData = await req.json();

    const service = await Service.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Service updated successfully",
        data: service,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update service" },
      { status: 500 }
    );
  }
}

// DELETE service
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;

    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Service deleted successfully",
        data: service,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete service" },
      { status: 500 }
    );
  }
}
