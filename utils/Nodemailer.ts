import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
    if (transporter) return transporter;

    transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST!,
        port: Number(process.env.MAIL_PORT),
        secure: Number(process.env.MAIL_PORT) === 465, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USERNAME!,
            pass: process.env.MAIL_PASSWORD!,
        },
    } as SMTPTransport.Options);

    return transporter;
}

export async function sendEmail({
    to,
    subject,
    html,
    text,
}: {
    to: string;
    subject: string;
    html: string;
    text?: string;
}) {
    const t = getTransporter();

    try {
        const info = await t.sendMail({
            from: `"${process.env.MAIL_FROM_NAME || "Solvix Core"}" <${process.env.MAIL_USERNAME}>`,
            to,
            subject,
            text: text || "New message from Solvix Core",
            html,
        });
        console.log("✅ Email sent:", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return { success: false, error };
    }
}
