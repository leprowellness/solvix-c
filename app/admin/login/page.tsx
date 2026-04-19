'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Lock, Mail } from 'lucide-react';

const AdminLoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simple authentication - in production, use proper backend authentication
      // Default credentials for demo
      const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@solvixcore.com';
      const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Store auth token in localStorage
        localStorage.setItem('adminToken', 'authenticated');
        localStorage.setItem('adminEmail', email);
        toast.success('Login successful!');
        router.push('/admin/dashboard');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="glass-premium rounded-2xl p-8 border border-cyan-400/30">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Login</h1>
            <p className="text-foreground/60">Manage your services and contacts</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-cyan-400/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 focus:border-cyan-400/50 focus:outline-none text-foreground placeholder:text-foreground/40 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-cyan-400/50" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background/40 border border-cyan-400/20 focus:border-cyan-400/50 focus:outline-none text-foreground placeholder:text-foreground/40 transition-all"
                  required
                />
              </div>
              <p className="text-xs text-foreground/50 mt-2">
                Demo: admin@solvixcore.com / admin123
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2.5 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/30"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-foreground/50 mt-6">
            Protected admin area. Use demo credentials for testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
