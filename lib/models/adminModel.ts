import mongoose from 'mongoose';
import crypto from 'crypto';

export interface AdminObject {
  _id?: string;
  username: string;
  password: string;
  email: string;
  role: 'admin' | 'superadmin';
  createdAt?: Date;
  updatedAt?: Date;
}

const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username'],
      unique: true,
      minlength: [3, 'Username must be at least 3 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      match: [/^\w+@[\w-]+\.\w{2,4}$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false,
    },
    role: {
      type: String,
      enum: ['admin', 'superadmin'],
      default: 'admin',
    },
  },
  { timestamps: true }
);

// Hash password before saving
AdminSchema.pre('save', function () {
  if (this.isModified('password')) {
    const salt = crypto.randomBytes(10);
    this.password = crypto
      .pbkdf2Sync(this.password, salt, 1000, 64, 'sha512')
      .toString('hex');
  }
});

const Admin = mongoose.models?.Admin || mongoose.model('Admin', AdminSchema);

export default Admin;
