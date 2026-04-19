'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { LogOut, LayoutDashboard, Package, Mail, Settings, Plus, Image as ImageIcon } from 'lucide-react';

interface Service {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
}

interface Contact {
  _id: string;
  name: string;
  email: string;
  service: string;
  createdAt: string;
}

interface Portfolio {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setIsAuthenticated(true);
    fetchData();
  }, [router]);

  const fetchData = async () => {
    try {
      // Fetch services
      const servicesRes = await fetch('/api/admin/services');
      if (servicesRes.ok) {
        const servicesData = await servicesRes.json();
        setServices(servicesData.data.slice(0, 5));
      }

      // Fetch contacts
      const contactsRes = await fetch('/api/admin/contacts');
      if (contactsRes.ok) {
        const contactsData = await contactsRes.json();
        setContacts(contactsData.data.slice(0, 5));
      }

      // Fetch portfolios
      const portfoliosRes = await fetch('/api/admin/portfolio');
      if (portfoliosRes.ok) {
        const portfoliosData = await portfoliosRes.json();
        setPortfolios(portfoliosData.data.slice(0, 5));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    toast.success('Logged out successfully');
    router.push('/admin/login');
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b border-cyan-400/20 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
              SC
            </div>
            <h1 className="text-2xl font-bold text-foreground">Solvix Admin</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">Dashboard</h2>
          <p className="text-foreground/60">Manage your website content</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Services Card */}
          <Link href="/admin/services">
            <div className="card-premium p-6 cursor-pointer hover:border-cyan-400/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Package className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-sm font-semibold text-cyan-400">View All →</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{services.length}</h3>
              <p className="text-foreground/60 text-sm">Services Available</p>
            </div>
          </Link>

          {/* Portfolio Card */}
          <Link href="/admin/portfolio">
            <div className="card-premium p-6 cursor-pointer hover:border-cyan-400/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-violet-400" />
                </div>
                <span className="text-sm font-semibold text-violet-400">View All →</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{portfolios.length}</h3>
              <p className="text-foreground/60 text-sm">Portfolio Projects</p>
            </div>
          </Link>

          {/* Contacts Card */}
          <Link href="/admin/contacts">
            <div className="card-premium p-6 cursor-pointer hover:border-cyan-400/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-sm font-semibold text-blue-400">View All →</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{contacts.length}</h3>
              <p className="text-foreground/60 text-sm">Recent Contacts</p>
            </div>
          </Link>

          {/* Settings Card */}
          <Link href="/admin/settings">
            <div className="card-premium p-6 cursor-pointer hover:border-cyan-400/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-sm font-semibold text-purple-400">Configure →</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Settings</h3>
              <p className="text-foreground/60 text-sm">Manage Site Settings</p>
            </div>
          </Link>
        </div>

        {/* Recent Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Services Table */}
          <div className="card-premium p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-foreground">Recent Services</h3>
              <Link
                href="/admin/services/add"
                className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-lg text-cyan-400 text-sm font-semibold transition-all"
              >
                <Plus size={16} />
                Add
              </Link>
            </div>

            {loading ? (
              <p className="text-foreground/50">Loading...</p>
            ) : services.length > 0 ? (
              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service._id}
                    href={`/admin/services/edit/${service._id}`}
                    className="p-4 bg-background/40 rounded-lg hover:bg-background/60 transition-all flex justify-between items-center group cursor-pointer"
                  >
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </p>
                      <p className="text-xs text-foreground/50">{service.category}</p>
                    </div>
                    <span className="text-cyan-400">→</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-foreground/50">No services yet</p>
            )}

            <Link
              href="/admin/services"
              className="block mt-4 text-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
            >
              View All →
            </Link>
          </div>

          {/* Portfolio Table */}
          <div className="card-premium p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-foreground">Recent Portfolio</h3>
              <Link
                href="/admin/portfolio/add"
                className="flex items-center gap-2 px-3 py-2 bg-violet-500/10 hover:bg-violet-500/20 rounded-lg text-violet-400 text-sm font-semibold transition-all"
              >
                <Plus size={16} />
                Add
              </Link>
            </div>

            {loading ? (
              <p className="text-foreground/50">Loading...</p>
            ) : portfolios.length > 0 ? (
              <div className="space-y-3">
                {portfolios.map((portfolio) => (
                  <Link
                    key={portfolio._id}
                    href={`/admin/portfolio/edit/${portfolio._id}`}
                    className="p-4 bg-background/40 rounded-lg hover:bg-background/60 transition-all flex justify-between items-center group cursor-pointer"
                  >
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-violet-400 transition-colors">
                        {portfolio.title}
                      </p>
                      <p className="text-xs text-foreground/50">{portfolio.category}</p>
                    </div>
                    <span className="text-violet-400">→</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-foreground/50">No portfolio items yet</p>
            )}

            <Link
              href="/admin/portfolio"
              className="block mt-4 text-center text-violet-400 hover:text-violet-300 text-sm font-semibold"
            >
              View All →
            </Link>
          </div>

          {/* Contacts Table */}
          <div className="card-premium p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Recent Contacts</h3>

            {loading ? (
              <p className="text-foreground/50">Loading...</p>
            ) : contacts.length > 0 ? (
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div
                    key={contact._id}
                    className="p-4 bg-background/40 rounded-lg hover:bg-background/60 transition-all"
                  >
                    <p className="font-semibold text-foreground">{contact.name}</p>
                    <p className="text-xs text-foreground/50">{contact.email}</p>
                    <p className="text-xs text-blue-400 mt-1">{contact.service}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-foreground/50">No contacts yet</p>
            )}

            <Link
              href="/admin/contacts"
              className="block mt-4 text-center text-blue-400 hover:text-blue-300 text-sm font-semibold"
            >
              View All →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
