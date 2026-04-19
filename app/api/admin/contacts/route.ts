import connectDB from "@/lib/database/connectDbs";
import Contact from "@/lib/models/contactModel";
import { NextRequest, NextResponse } from "next/server";

// GET all contacts
export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: contacts.length,
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch contacts",
      },
      { status: 500 }
    );
  }
}

// DELETE a contact
export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Contact ID is required" },
        { status: 400 }
      );
    }

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete contact",
      },
      { status: 500 }
    );
  }
}
