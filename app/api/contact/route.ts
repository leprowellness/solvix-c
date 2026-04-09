import connectDB from "@/lib/database/connectDbs";
import Contact, { contactObject } from "@/lib/models/contactModel";
import { sendEmail } from "@/utils/Nodemailer";
import { generateEmailTemplate, generateUserConfirmationTemplate } from "@/utils/emailTemplate";
import { NextRequest, NextResponse } from "next/server";

function isContactData(object: unknown): object is contactObject {
    if (object === null || object === undefined) return false;
    if (typeof object !== "object") return false;
    if (Array.isArray(object)) return false;

    const obj = object as Record<string, unknown>;

    if (
        (typeof obj.email !== "string" || obj.email.trim() === "") ||
        (typeof obj.name !== "string" || obj.name.trim() === "") ||
        (typeof obj.phone !== "string" || obj.phone.trim() === "") ||
        (typeof obj.service !== "string" || obj.service.trim() === "") ||
        (typeof obj.projectType !== "string" || obj.projectType.trim() === "") ||
        (typeof obj.projectDescription !== "string" || obj.projectDescription.trim() === "") ||
        (typeof obj.budget !== "string" || obj.budget.trim() === "") ||
        (typeof obj.timeline !== "string" || obj.timeline.trim() === "") ||
        (typeof obj.projectStage !== "string" || obj.projectStage.trim() === "") ||
        (typeof obj.message !== "string" || obj.message.trim() === "") ||
        (typeof obj.country !== "string" || obj.country.trim() === "")
    ) {
        return false;
    }

    return true;
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const contactData = await req.json();

        if (!isContactData(contactData)) {
            console.error("❌ Validation failed - missing required fields:", {
                hasEmail: contactData.email,
                hasName: contactData.name,
                hasPhone: contactData.phone,
                hasService: contactData.service,
                hasProjectType: contactData.projectType,
                hasProjectDescription: contactData.projectDescription,
                hasBudget: contactData.budget,
                hasTimeline: contactData.timeline,
                hasProjectStage: contactData.projectStage,
                hasMessage: contactData.message,
            });
            return NextResponse.json({
                success: false,
                message: "Invalid Contact Data. Please fill all required fields."
            }, { status: 400 });
        }

        const { 
            name, 
            email, 
            company, 
            phone, 
            service, 
            projectType,
            projectDescription,
            budget,
            timeline,
            projectStage,
            technologies,
            teamSize,
            additionalNotes,
            message,
            country,
            whatsappNumber
        } = contactData;

        // 1. Save to Database
        const newContact = await Contact.create({
            name,
            email,
            company,
            phone,
            service,
            projectType,
            projectDescription,
            budget,
            timeline,
            projectStage,
            technologies,
            teamSize,
            additionalNotes,
            message,
            country,
            whatsappNumber
        });

        console.log("✅ Contact saved in DB:", newContact._id);

        // 2. Send Email to Admin (Owner) with all project details
        const adminEmailHtml = generateEmailTemplate(
            name, 
            message, 
            service, 
            company, 
            phone, 
            email,
            projectType,
            projectDescription,
            budget,
            timeline,
            projectStage,
            technologies,
            teamSize,
            additionalNotes,
            country,
            whatsappNumber
        );
        await sendEmail({
            to: process.env.ADMIN_EMAIL || "info@solvixcore.com",
            subject: `📨 New Project Inquiry from ${name} - Solvix Core`,
            html: adminEmailHtml,
            text: `New project inquiry from ${name}. Project: ${projectType}. Budget: ${budget}. Timeline: ${timeline}.`,
        });

        // 3. Send Confirmation Email to User
        const userEmailHtml = generateUserConfirmationTemplate(name);
        await sendEmail({
            to: email,
            subject: "We've received your project inquiry - Solvix Core",
            html: userEmailHtml,
            text: `Hi ${name}, thank you for submitting your project inquiry! We'll get back to you soon.`,
        });

        return NextResponse.json({
            success: true,
            message: "Project inquiry submitted successfully! We'll contact you within 24 hours."
        }, { status: 201 });

    } catch (err: any) {
        console.error("❌ Error in contact API route:", {
            message: err.message,
            name: err.name,
            stack: err.stack,
            code: err.code,
        });

        // Check for specific validation errors
        if (err.name === 'ValidationError') {
            const validationErrors = Object.keys(err.errors).map(key => {
                return `${key}: ${err.errors[key].message}`;
            });
            console.error("📋 Validation errors:", validationErrors);
            return NextResponse.json({
                success: false,
                message: `Validation error: ${validationErrors.join(', ')}`
            }, { status: 400 });
        }

        return NextResponse.json({
            success: false,
            message: "An internal server error occurred. Please try again later."
        }, { status: 500 });
    }
}