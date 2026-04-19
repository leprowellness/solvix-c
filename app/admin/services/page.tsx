'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { Plus, Edit2, Trash2, ArrowLeft, Loader } from 'lucide-react';

interface Service {
  _id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  link: string;
  image?: string;
  createdAt: string;
}

const AdminServicesPage = () => {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchServices();
  }, [router]);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/admin/services');
      if (res.ok) {
        const data = await res.json();
        setServices(data.data);
      }
    } catch (error) {
      toast.error('Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  const deleteService = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this service?')) {
      return;
    }

    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Service deleted successfully');
        setServices(services.filter((s) => s._id !== id));
      } else {
        toast.error('Failed to delete service');
      }
    } catch (error) {
      toast.error('Error deleting service');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-cyan-400/20 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/dashboard"
              className="p-2 hover:bg-foreground/10 rounded-lg transition-all"
            >
              <ArrowLeft size={20} className="text-foreground" />
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Services</h1>
          </div>
          <Link
            href="/admin/services/add"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            <Plus size={20} />
            Add Service
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-cyan-400" size={32} />
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-foreground/60 mb-4">No services found</p>
            <Link
              href="/admin/services/add"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500/10 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/20 transition-all"
            >
              <Plus size={20} />
              Create First Service
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service._id}
                className="card-premium p-6 hover:border-cyan-400/50 transition-all group"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-cyan-400 mt-2">{service.category}</p>
                </div>

                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex gap-2">
                  <Link
                    href={`/admin/services/edit/${service._id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg text-sm font-semibold transition-all"
                  >
                    <Edit2 size={16} />
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteService(service._id)}
                    disabled={deleting === service._id}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-sm font-semibold transition-all disabled:opacity-50"
                  >
                    <Trash2 size={16} />
                    {deleting === service._id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminServicesPage;
