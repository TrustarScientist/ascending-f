import React, { useState } from 'react';
import { Card, Button, Input } from '../components/Shared';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, FileText, Settings, LogOut, Bell, Search, Plus } from 'lucide-react';

const data = [
  { name: 'Jan', applicants: 40, placements: 24 },
  { name: 'Feb', applicants: 30, placements: 13 },
  { name: 'Mar', applicants: 20, placements: 58 },
  { name: 'Apr', applicants: 27, placements: 39 },
  { name: 'May', applicants: 18, placements: 48 },
  { name: 'Jun', applicants: 23, placements: 38 },
];

const leads = [
  { id: 1, name: "TechCorp Solutions", type: "Employer", status: "New", date: "2023-10-24" },
  { id: 2, name: "Sarah Miller", type: "Apprentice", status: "Contacted", date: "2023-10-23" },
  { id: 3, name: "Innovate Inc", type: "Employer", status: "Qualified", date: "2023-10-22" },
  { id: 4, name: "David Kim", type: "Apprentice", status: "New", date: "2023-10-22" },
];

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold tracking-wide">Ascending<span className="text-brand-400">Admin</span></h2>
        </div>
        <nav className="flex-grow px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            <Users className="h-5 w-5" />
            <span>Overview</span>
          </button>
          <button 
             onClick={() => setActiveTab('content')}
             className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'content' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            <FileText className="h-5 w-5" />
            <span>Content CMS</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center space-x-2 text-slate-400 hover:text-white text-sm">
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8">
          <h2 className="text-lg font-semibold text-slate-800 capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-5 w-5 text-slate-500 cursor-pointer hover:text-slate-700" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="h-8 w-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm">
              AD
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-grow overflow-y-auto p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <p className="text-sm text-slate-500 mb-1">Total Applicants</p>
                  <h3 className="text-3xl font-bold text-slate-900">1,248</h3>
                  <span className="text-xs text-green-500 font-medium">+12% from last month</span>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-slate-500 mb-1">Active Partners</p>
                  <h3 className="text-3xl font-bold text-slate-900">254</h3>
                  <span className="text-xs text-green-500 font-medium">+5 new this week</span>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-slate-500 mb-1">Placement Rate</p>
                  <h3 className="text-3xl font-bold text-slate-900">94.2%</h3>
                  <span className="text-xs text-slate-400 font-medium">Steady</span>
                </Card>
              </div>

              {/* Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Application vs. Placement Trends</h3>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        cursor={{fill: '#f1f5f9'}}
                      />
                      <Bar dataKey="applicants" name="Applicants" fill="#93c5fd" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="placements" name="Placements" fill="#2563eb" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Leads Table */}
              <Card className="overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-900">Recent Inquiries</h3>
                  <Button size="sm" variant="outline">View All</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900">{lead.name}</td>
                          <td className="px-6 py-4 text-slate-600">{lead.type}</td>
                          <td className="px-6 py-4 text-slate-500">{lead.date}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              lead.status === 'New' ? 'bg-blue-100 text-blue-700' : 
                              lead.status === 'Qualified' ? 'bg-green-100 text-green-700' :
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-brand-600 hover:text-brand-800 font-medium">Review</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'content' && (
             <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-900">Content Management</h2>
                  <Button icon={Plus}>Add New Post</Button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                   <Card className="p-6 border-l-4 border-brand-500">
                      <h3 className="font-bold text-lg mb-2">Programs</h3>
                      <p className="text-slate-500 mb-4">Manage apprenticeship listings, curriculum details, and requirements.</p>
                      <Button variant="outline" size="sm">Manage Programs</Button>
                   </Card>
                   <Card className="p-6 border-l-4 border-green-500">
                      <h3 className="font-bold text-lg mb-2">Success Stories</h3>
                      <p className="text-slate-500 mb-4">Add new testimonials and graduate outcomes.</p>
                      <Button variant="outline" size="sm">Manage Stories</Button>
                   </Card>
                   <Card className="p-6 border-l-4 border-purple-500">
                      <h3 className="font-bold text-lg mb-2">Blog Posts</h3>
                      <p className="text-slate-500 mb-4">Edit insights, trends, and news articles.</p>
                      <Button variant="outline" size="sm">Manage Blog</Button>
                   </Card>
                </div>
             </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;