'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { Plus, Edit2, Trash2, ArrowLeft, Loader, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  category: string;
  technologies: string[];
  featured: boolean;
  createdAt: string;
}

const AdminPortfolioPage = () => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchPortfolios();
  }, [router]);

  const fetchPortfolios = async () => {
    try {
      const res = await fetch('/api/admin/portfolio');
      if (res.ok) {
        const data = await res.json();
        setPortfolios(data.data);
      }
    } catch (error) {
      toast.error('Failed to fetch portfolio items');
    } finally {
      setLoading(false);
    }
  };

  const deletePortfolio = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this portfolio item?')) {
      return;
    }

    setDeleting(id);
    try {
      console.log('deletePortfolio: Starting deletion for ID:', id);
      
      const url = `/api/admin/portfolio/${id}`;
      console.log('deletePortfolio: Requesting URL:', url);
      
      const res = await fetch(url, { 
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('deletePortfolio: Response status:', res.status, 'OK:', res.ok);
      
      const data = await res.json();
      console.log('deletePortfolio: Response data:', JSON.stringify(data, null, 2));

      if (res.ok && data.success) {
        console.log('deletePortfolio: Deletion successful');
        toast.success('Portfolio item deleted successfully');
        // Remove from local state immediately
        setPortfolios(portfolios.filter((p) => p._id !== id));
        // Wait a moment then refetch to ensure it's gone from DB
        setTimeout(() => {
          fetchPortfolios();
        }, 500);
      } else {
        console.error('deletePortfolio: Deletion failed. Success:', data.success, 'Message:', data.message);
        toast.error(data.message || 'Failed to delete portfolio item');
      }
    } catch (error) {
      console.error('deletePortfolio: Catch error:', error);
      toast.error('Error deleting portfolio item');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-primary/20 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/dashboard"
              className="p-2 hover:bg-foreground/10 rounded-lg transition-all"
            >
              <ArrowLeft size={20} className="text-foreground" />
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Portfolio</h1>
          </div>
          <Link
            href="/admin/portfolio/add"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <Plus size={20} />
            Add Portfolio
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 rounded-full border-2 border-foreground/10" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin" />
            </div>
          </div>
        ) : portfolios.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-foreground/60 mb-4">No portfolio items yet</p>
            <Link
              href="/admin/portfolio/add"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition-all"
            >
              <Plus size={20} />
              Create First Portfolio
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {portfolios.map((portfolio) => (
              <div
                key={portfolio._id}
                className="card-premium p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-background/40 border border-primary/10">
                    {portfolio.imageUrl ? (
                      <Image
                        src={portfolio.imageUrl}
                        alt={portfolio.title}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-foreground/40">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{portfolio.title}</h3>
                        <p className="text-sm text-primary">{portfolio.category}</p>
                      </div>
                      {portfolio.featured && (
                        <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
                      {portfolio.description}
                    </p>

                    {/* Technologies */}
                    {portfolio.technologies && portfolio.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {portfolio.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-background/40 text-foreground/60 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-2">
                      {portfolio.liveLink && (
                        <a
                          href={portfolio.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-semibold"
                        >
                          Live Link
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0">
                    <Link
                      href={`/admin/portfolio/edit/${portfolio._id}`}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-semibold transition-all"
                    >
                      <Edit2 size={16} />
                      Edit
                    </Link>
                    <button
                      onClick={() => deletePortfolio(portfolio._id)}
                      disabled={deleting === portfolio._id}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-sm font-semibold transition-all disabled:opacity-50 cursor-pointer hover:text-red-300"
                    >
                      <Trash2 size={16} />
                      {deleting === portfolio._id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortfolioPage;
