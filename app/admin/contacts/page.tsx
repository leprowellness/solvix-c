'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { Trash2, ArrowLeft, Loader, Mail, Phone, Calendar } from 'lucide-react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company?: string;
  projectType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  projectStage: string;
  technologies?: string;
  teamSize?: string;
  additionalNotes?: string;
  country: string;
  whatsappNumber?: string;
  createdAt: string;
}

const AdminContactsPage = () => {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchContacts();
  }, [router]);

  const fetchContacts = async () => {
    try {
      const res = await fetch('/api/admin/contacts');
      if (res.ok) {
        const data = await res.json();
        setContacts(data.data);
      }
    } catch (error) {
      toast.error('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/contacts?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Contact deleted successfully');
        setContacts(contacts.filter((c) => c._id !== id));
        setSelectedContact(null);
      } else {
        toast.error('Failed to delete contact');
      }
    } catch (error) {
      toast.error('Error deleting contact');
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
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
            <h1 className="text-2xl font-bold text-foreground">Contact Submissions</h1>
          </div>
          <div className="text-sm text-foreground/60">
            Total: <span className="font-bold text-cyan-400">{contacts.length}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-cyan-400" size={32} />
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20">
            <Mail size={48} className="mx-auto text-foreground/30 mb-4" />
            <p className="text-foreground/60">No contacts yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contacts List */}
            <div className="lg:col-span-1">
              <div className="card-premium p-4 max-h-[600px] overflow-y-auto sticky top-28">
                <h3 className="font-bold text-foreground mb-4">Recent Submissions</h3>
                <div className="space-y-2">
                  {contacts.map((contact) => (
                    <button
                      key={contact._id}
                      onClick={() => setSelectedContact(contact)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedContact?._id === contact._id
                          ? 'bg-cyan-500/20 border border-cyan-400/50'
                          : 'bg-background/40 hover:bg-background/60 border border-cyan-400/10'
                      }`}
                    >
                      <p className="font-semibold text-foreground text-sm">{contact.name}</p>
                      <p className="text-xs text-foreground/50">{contact.service}</p>
                      <p className="text-xs text-cyan-400 mt-1">
                        {formatDate(contact.createdAt)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2">
              {selectedContact ? (
                <div className="card-premium p-8">
                  {/* Header */}
                  <div className="mb-8 pb-6 border-b border-cyan-400/10">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {selectedContact.name}
                    </h2>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail size={18} className="text-cyan-400" />
                        <a
                          href={`mailto:${selectedContact.email}`}
                          className="text-foreground/70 hover:text-cyan-400 transition-colors"
                        >
                          {selectedContact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-cyan-400" />
                        <a
                          href={`tel:${selectedContact.phone}`}
                          className="text-foreground/70 hover:text-cyan-400 transition-colors"
                        >
                          {selectedContact.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-cyan-400" />
                        <span className="text-foreground/70">{formatDate(selectedContact.createdAt)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Company and Service */}
                  <div className="grid grid-cols-2 gap-4 mb-8 pb-6 border-b border-cyan-400/10">
                    <div>
                      <p className="text-xs text-foreground/50 mb-1">Company</p>
                      <p className="text-foreground">{selectedContact.company || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 mb-1">Service Interested</p>
                      <p className="text-cyan-400 font-semibold">{selectedContact.service}</p>
                    </div>
                  </div>

                  {/* Location Information */}
                  <div className="grid grid-cols-2 gap-4 mb-8 pb-6 border-b border-cyan-400/10">
                    <div>
                      <p className="text-xs text-foreground/50 mb-1">Country</p>
                      <p className="text-foreground font-semibold">{selectedContact.country}</p>
                    </div>
                    {selectedContact.whatsappNumber && (
                      <div>
                        <p className="text-xs text-foreground/50 mb-1">WhatsApp</p>
                        <a
                          href={`https://wa.me/${selectedContact.whatsappNumber.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {selectedContact.whatsappNumber}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="mb-8 pb-6 border-b border-cyan-400/10">
                    <h3 className="text-sm font-bold text-foreground mb-4">Project Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-foreground/50 mb-1">Project Type</p>
                        <p className="text-foreground">{selectedContact.projectType}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 mb-1">Project Stage</p>
                        <p className="text-foreground">{selectedContact.projectStage}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 mb-1">Budget</p>
                        <p className="text-cyan-400 font-semibold">{selectedContact.budget}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 mb-1">Timeline</p>
                        <p className="text-foreground">{selectedContact.timeline}</p>
                      </div>
                      {selectedContact.technologies && (
                        <div className="col-span-2">
                          <p className="text-xs text-foreground/50 mb-1">Technologies</p>
                          <p className="text-foreground">{selectedContact.technologies}</p>
                        </div>
                      )}
                      {selectedContact.teamSize && (
                        <div>
                          <p className="text-xs text-foreground/50 mb-1">Team Size</p>
                          <p className="text-foreground">{selectedContact.teamSize}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="mb-8 pb-6 border-b border-cyan-400/10">
                    <p className="text-sm font-semibold text-foreground mb-3">Project Description</p>
                    <p className="text-foreground/80 leading-relaxed p-4 bg-background/40 rounded-lg border border-cyan-400/10">
                      {selectedContact.projectDescription}
                    </p>
                  </div>

                  {/* Additional Notes */}
                  {selectedContact.additionalNotes && (
                    <div className="mb-8 pb-6 border-b border-cyan-400/10">
                      <p className="text-sm font-semibold text-foreground mb-3">Additional Notes</p>
                      <p className="text-foreground/80 leading-relaxed p-4 bg-background/40 rounded-lg border border-cyan-400/10">
                        {selectedContact.additionalNotes}
                      </p>
                    </div>
                  )}

                  {/* Message */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-foreground mb-3">Message</p>
                    <p className="text-foreground/80 leading-relaxed p-4 bg-background/40 rounded-lg border border-cyan-400/10">
                      {selectedContact.message}
                    </p>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteContact(selectedContact._id)}
                    disabled={deleting === selectedContact._id}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg font-semibold transition-all disabled:opacity-50"
                  >
                    <Trash2 size={18} />
                    {deleting === selectedContact._id ? 'Deleting...' : 'Delete Contact'}
                  </button>
                </div>
              ) : (
                <div className="card-premium p-12 flex items-center justify-center h-64">
                  <p className="text-foreground/60">Select a contact to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContactsPage;
