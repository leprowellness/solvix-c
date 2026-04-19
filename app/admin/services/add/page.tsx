'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { ArrowLeft, Loader } from 'lucide-react';

interface FormData {
  title: string;
  description: string;
  icon: string;
  category: string;
  link: string;
  image: string;
  features: string[];
}

const ServiceFormPage = ({ isEdit }: { isEdit?: boolean }) => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    icon: '',
    category: 'AI',
    link: '',
    image: '',
    features: [],
  });
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [featureInput, setFeatureInput] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    if (isEdit && id) {
      fetchService();
    }
  }, [isEdit, id, router]);

  const fetchService = async () => {
    try {
      const res = await fetch(`/api/admin/services/${id}`);
      if (res.ok) {
        const data = await res.json();
        setFormData(data.data);
      } else {
        toast.error('Service not found');
        router.push('/admin/services');
      }
    } catch (error) {
      toast.error('Failed to fetch service');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, featureInput.trim()],
      }));
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const url = isEdit ? `/api/admin/services/${id}` : '/api/admin/services';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(isEdit ? 'Service updated successfully' : 'Service created successfully');
        router.push('/admin/services');
      } else {
        const error = await res.json();
        toast.error(error.message || 'Failed to save service');
      }
    } catch (error) {
      toast.error('Error saving service');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader className="animate-spin text-cyan-400" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-cyan-400/20 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/services"
              className="p-2 hover:bg-foreground/10 rounded-lg transition-all"
            >
              <ArrowLeft size={20} className="text-foreground" />
            </Link>
            <h1 className="text-2xl font-bold text-foreground">
              {isEdit ? 'Edit Service' : 'Add New Service'}
            </h1>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="card-premium p-8">
          {/* Title */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Service Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., AI Automation Services"
              className="w-full px-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 focus:border-cyan-400/50 focus:outline-none text-foreground placeholder:text-foreground/40 transition-all"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe what this service offers..."
              className="w-full px-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 focus:border-cyan-400/50 focus:outline-none text-foreground placeholder:text-foreground/40 transition-all resize-none"
              rows={4}
              required
            />
          </div>

          {/* Grid: Icon and Category */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Icon Name *
              </label>
              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleInputChange}
                placeholder="e.g., Brain, Zap"
                className="w-full px-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 focus:border-cyan-400/50 focus:outline-none text-foreground placeholder:text-foreground/40 transition-all"
                required
              />
              <p className="text-xs text-foreground/50 mt-1">Lucide React icon name</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 focus:border-cyan-400/50 focus:outline-none text-foreground transition-all"
                required
              >
                <option value="AI">AI</option>
                <option value="Web">Web</option>
                <option value="Mobile">Mobile</option>
                <option value="Marketing">Marketing</option>
                <option value="Development">Development</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Grid: Link and Image */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Service Link *
              </label>
              <input
                type="text"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                placeholder="/services/ai-solutions"
                className="w-full px-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 focus:border-cyan-400/50 focus:outline-none text-foreground placeholder:text-foreground/40 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="/background/service.webp"
                className="w-full px-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 focus:border-cyan-400/50 focus:outline-none text-foreground placeholder:text-foreground/40 transition-all"
              />
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Features
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="Add a feature..."
                className="flex-1 px-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 focus:border-cyan-400/50 focus:outline-none text-foreground placeholder:text-foreground/40 transition-all"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addFeature();
                  }
                }}
              />
              <button
                type="button"
                onClick={addFeature}
                className="px-6 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg font-semibold transition-all"
              >
                Add
              </button>
            </div>

            {formData.features.length > 0 && (
              <div className="space-y-2">
                {formData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-background/40 rounded-lg border border-cyan-400/10"
                  >
                    <span className="text-foreground text-sm">{feature}</span>
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all disabled:opacity-50 shadow-lg shadow-cyan-500/30"
            >
              {submitting ? 'Saving...' : isEdit ? 'Update Service' : 'Create Service'}
            </button>
            <Link
              href="/admin/services"
              className="flex items-center justify-center px-6 py-3 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-lg font-semibold transition-all"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceFormPage;
