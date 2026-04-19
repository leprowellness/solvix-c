import connectDB from "@/lib/database/connectDbs";
import Service, { ServiceObject } from "@/lib/models/serviceModel";
import { NextRequest, NextResponse } from "next/server";

function isServiceData(object: unknown): object is ServiceObject {
  if (object === null || object === undefined) return false;
  if (typeof object !== "object") return false;
  if (Array.isArray(object)) return false;

  const obj = object as Record<string, unknown>;

  return (
    typeof obj.title === "string" &&
    obj.title.trim() !== "" &&
    typeof obj.description === "string" &&
    obj.description.trim() !== "" &&
    typeof obj.icon === "string" &&
    obj.icon.trim() !== "" &&
    typeof obj.category === "string" &&
    obj.category.trim() !== "" &&
    typeof obj.link === "string" &&
    obj.link.trim() !== ""
  );
}

// GET all services
export async function GET() {
  try {
    await connectDB();
    const services = await Service.find().sort({ createdAt: -1 });
    return NextResponse.json(
      {
        success: true,
        count: services.length,
        data: services,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch services",
      },
      { status: 500 }
    );
  }
}

// POST new service
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const serviceData = await req.json();

    if (!isServiceData(serviceData)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid service data. Please provide all required fields.",
        },
        { status: 400 }
      );
    }

    const { title, description, icon, category, link, image, features } =
      serviceData;

    const newService = await Service.create({
      title,
      description,
      icon,
      category,
      link,
      image,
      features: features || [],
    });

    return NextResponse.json(
      {
        success: true,
        message: "Service created successfully",
        data: newService,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating service:", error);
    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "Service title already exists",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to create service",
      },
      { status: 500 }
    );
  }
}
