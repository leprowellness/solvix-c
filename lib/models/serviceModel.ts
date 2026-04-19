import mongoose from 'mongoose';

export interface ServiceObject {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  link: string;
  image?: string;
  features?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const ServiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a service title'],
      unique: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    icon: {
      type: String,
      required: [true, 'Please provide an icon name'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
      enum: ['AI', 'Web', 'Mobile', 'Marketing', 'Development', 'Other'],
    },
    link: {
      type: String,
      required: [true, 'Please provide a link'],
    },
    image: {
      type: String,
      default: '',
    },
    features: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Service =
  mongoose.models?.Service || mongoose.model('Service', ServiceSchema);

export default Service;
