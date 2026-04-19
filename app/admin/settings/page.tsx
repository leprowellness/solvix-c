'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { ArrowLeft, LogOut } from 'lucide-react';

const AdminSettingsPage = () => {
  const router = useRouter();
  const [adminEmail, setAdminEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    const email = localStorage.getItem('adminEmail');
    if (email) {
      setAdminEmail(email);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    toast.success('Logged out successfully');
    router.push('/admin/login');
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
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Account Settings */}
        <div className="card-premium p-8 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Account Settings</h2>

          <div className="space-y-6 mb-8 pb-8 border-b border-cyan-400/10">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Admin Email
              </label>
              <input
                type="email"
                value={adminEmail}
                disabled
                className="w-full px-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 text-foreground cursor-not-allowed opacity-60"
              />
              <p className="text-xs text-foreground/50 mt-2">Email cannot be changed</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg font-semibold transition-all"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* System Information */}
        <div className="card-premium p-8 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">System Information</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-background/40 rounded-lg border border-cyan-400/10">
              <span className="text-foreground/70">Version</span>
              <span className="text-cyan-400 font-semibold">1.0.0</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background/40 rounded-lg border border-cyan-400/10">
              <span className="text-foreground/70">Last Updated</span>
              <span className="text-cyan-400 font-semibold">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background/40 rounded-lg border border-cyan-400/10">
              <span className="text-foreground/70">Status</span>
              <span className="text-green-400 font-semibold">Active</span>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="card-premium p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Guide</h2>

          <div className="space-y-4 text-foreground/80">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Managing Services</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Click "Add Service" to create new services</li>
                <li>Edit existing services from the Services page</li>
                <li>Delete services you no longer need</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Managing Contacts</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>View all contact submissions in one place</li>
                <li>Click on any contact to see full details</li>
                <li>Delete old or spam contacts</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Security Tips</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Always logout when you're done</li>
                <li>Keep your admin credentials secure</li>
                <li>Do not share your login information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
