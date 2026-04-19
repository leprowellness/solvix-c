import mongoose from "mongoose"

export interface contactObject {
    name: string,
    email: string,
    phone: string,
    company?: string,
    service: string,
    projectType: string,
    projectDescription: string,
    budget: string,
    timeline: string,
    projectStage: string,
    technologies?: string,
    teamSize?: string,
    additionalNotes?: string,
    message: string,
    country: string,
    whatsappNumber?: string,
}

const contactSchema = new mongoose.Schema({
    // Basic Information
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    country: { type: String, required: true, trim: true },
    whatsappNumber: { type: String, trim: true },
    
    // Service & Project Details
    service: { type: String, required: true, trim: true },
    projectType: { type: String, required: true, trim: true },
    projectDescription: { type: String, required: true, trim: true },
    
    // Project Scope
    budget: { type: String, required: true, trim: true },
    timeline: { type: String, required: true, enum: ['ASAP (1-2 weeks)', 'Soon (1 month)', 'Flexible (2-3 months)', '3-6 months', '6+ months', 'Not Sure'], trim: true },
    projectStage: { type: String, required: true, enum: ['Idea Phase', 'Early Stage', 'MVP Ready', 'Scaling', 'Other'], trim: true },
    
    // Additional Details
    technologies: { type: String, trim: true },
    teamSize: { type: String, trim: true },
    additionalNotes: { type: String, trim: true },
    
    // Legacy field
    message: { type: String, required: true, trim: true },
}, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model<contactObject>("Contact", contactSchema);

export default Contact;

