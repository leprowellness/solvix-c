'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { ArrowLeft, Loader } from 'lucide-react';

interface FormData {
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  category: string;
  technologies: string;
  featured: boolean;
}

export function AdminPortfolioFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const portfolioId = searchParams.get('id');
  const isEdit = !!portfolioId;

  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    imageUrl: '',
    liveLink: '',
    category: 'Web Development',
    technologies: '',
    featured: false,
  });

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(isEdit);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const categories = [
    'Web Development',
    'Mobile App',
    'AI Solution',
    'Automation',
    'Marketing',
    'Other',
  ];

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    if (isEdit) {
      fetchPortfolio();
    }
  }, [router, isEdit, portfolioId]);

  const fetchPortfolio = async () => {
    try {
      const res = await fetch(`/api/admin/portfolio/${portfolioId}`);
      if (res.ok) {
        const data = await res.json();
        setFormData({
          title: data.data.title,
          description: data.data.description,
          imageUrl: data.data.imageUrl,
          liveLink: data.data.liveLink,
          category: data.data.category,
          technologies: data.data.technologies.join(', '),
          featured: data.data.featured,
        });
        // Set image preview to existing image
        setImagePreview(data.data.imageUrl);
      }
    } catch (error) {
      toast.error('Failed to load portfolio item');
      router.push('/admin/portfolio');
    } finally {
      setInitialLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('Only JPEG, PNG, WebP, and GIF images are allowed');
        return;
      }

      // Validate file size (2MB for production compatibility)
      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.error('File size must be less than 2MB');
        return;
      }

      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/portfolio/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        return data.imageUrl;
      } else {
        toast.error(data.message || 'Failed to upload image');
        return null;
      }
    } catch (error) {
      toast.error('Error uploading image');
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.imageUrl && !imageFile) {
      toast.error('Please upload or provide a portfolio image');
      return;
    }

    setLoading(true);
    try {
      let finalImageUrl = formData.imageUrl;

      // Upload new image if selected
      if (imageFile) {
        const uploadedUrl = await uploadImage(imageFile);
        if (!uploadedUrl) {
          setLoading(false);
          return;
        }
        finalImageUrl = uploadedUrl;
      }

      const payload = {
        ...formData,
        imageUrl: finalImageUrl,
        technologies: formData.technologies
          .split(',')
          .map((t) => t.trim())
          .filter((t) => t),
      };

      const method = isEdit ? 'PUT' : 'POST';
      const url = isEdit ? `/api/admin/portfolio/${portfolioId}` : '/api/admin/portfolio';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success(isEdit ? 'Portfolio updated successfully' : 'Portfolio created successfully');
        router.push('/admin/portfolio');
      } else {
        toast.error(isEdit ? 'Failed to update portfolio' : 'Failed to create portfolio');
      }
    } catch (error) {
      toast.error('Error saving portfolio');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader className="animate-spin text-cyan-400" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-cyan-400/20 bg-background/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link
            href="/admin/portfolio"
            className="p-2 hover:bg-foreground/10 rounded-lg transition-all"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            {isEdit ? 'Edit Portfolio' : 'Add Portfolio'}
          </h1>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="card-premium p-8 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Portfolio project title"
              className="w-full px-4 py-2.5 bg-background/40 border border-cyan-400/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Project description and details"
              rows={4}
              className="w-full px-4 py-2.5 bg-background/40 border border-cyan-400/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400 transition-all resize-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Portfolio Image <span className="text-red-400">*</span>
            </label>
            
            {/* File Input Area */}
            <div className="relative mb-4">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleFileChange}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex items-center justify-center w-full px-6 py-8 border-2 border-dashed border-cyan-400/30 rounded-lg cursor-pointer hover:border-cyan-400/60 transition-all bg-background/40 hover:bg-background/60 group"
              >
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-cyan-400/50 group-hover:text-cyan-400 transition-colors mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  <p className="text-sm font-semibold text-foreground">
                    {imageFile ? imageFile.name : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    PNG, JPG, GIF, WebP up to 5MB
                  </p>
                </div>
              </label>
            </div>

            {/* Image Preview */}
            {(imagePreview || formData.imageUrl) && (
              <div className="relative w-full h-48 bg-background/40 rounded-lg overflow-hidden border border-cyan-400/20">
                <img
                  src={imagePreview || formData.imageUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                {imageFile && (
                  <div className="absolute top-2 right-2 px-3 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-lg">
                    New Image
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Live Link */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Live Link <span className="text-foreground/50 text-xs">(Optional)</span>
            </label>
            <input
              type="url"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full px-4 py-2.5 bg-background/40 border border-cyan-400/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background/40 border border-cyan-400/20 rounded-lg text-foreground focus:outline-none focus:border-cyan-400 transition-all"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Technologies
            </label>
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="React, Next.js, Tailwind CSS (comma-separated)"
              className="w-full px-4 py-2.5 bg-background/40 border border-cyan-400/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          {/* Featured */}
          <div className="flex items-center gap-3 p-4 bg-background/40 border border-cyan-400/10 rounded-lg">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              id="featured"
              className="w-5 h-5 accent-cyan-400 cursor-pointer"
            />
            <label htmlFor="featured" className="text-sm font-semibold text-foreground cursor-pointer">
              Mark as Featured Portfolio
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading && <Loader size={18} className="animate-spin" />}
              {isEdit ? 'Update Portfolio' : 'Create Portfolio'}
            </button>
            <Link
              href="/admin/portfolio"
              className="px-6 py-3 bg-background/40 border border-cyan-400/20 text-foreground rounded-lg font-semibold hover:border-cyan-400/50 transition-all"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
