import mongoose from 'mongoose';

export interface PortfolioObject {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  liveLink?: string;
  category?: string;
  technologies?: string[];
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const PortfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a portfolio title'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide an image URL'],
    },
    liveLink: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'Web Development',
      enum: ['Web Development', 'Mobile App', 'AI Solution', 'Automation', 'Marketing', 'Other'],
    },
    technologies: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Portfolio =
  mongoose.models?.Portfolio || mongoose.model('Portfolio', PortfolioSchema);

export default Portfolio;
