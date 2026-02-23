import React, { useEffect, useState } from 'react';
import { getLeads } from '../api/leadApi';
import { Download, Users, Clock, CheckCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const data = await getLeads();
        setLeads(data || []); // Safety check: if data is null, use empty array
      } catch (err) {
        console.error("Leads लोड नहीं हो पाईं");
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  const downloadCSV = () => {
    if (leads.length === 0) return alert("कोई डेटा उपलब्ध नहीं है!");
    const headers = "Name,Mobile,Email,Service,Status\n";
    const csvData = leads.map(l => `${l.name},${l.mobile},${l.email},${l.serviceType},${l.status}`).join("\n");
    const blob = new Blob([headers + csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Duatech_Leads.csv';
    a.click();
  };

  // Filter leads based on search
  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.mobile.includes(searchTerm)
  );

  return (
    <div className="p-8 bg-[#0A1F44] min-h-screen text-white pt-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-black text-[#00FF88] tracking-widest uppercase mb-2">Lead Control Room</h1>
          <p className="text-gray-400 text-sm">Managing solar inquiries for Dova Tech</p>
        </div>
        
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-[#00FF88] transition-all w-64"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={downloadCSV} className="bg-[#00FF88] text-[#0A1F44] px-6 py-2 rounded-full font-bold flex gap-2 items-center hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all">
            <Download size={18} /> EXPORT
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass-card p-6 border-l-4 border-[#00FF88]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-xs uppercase font-bold mb-1">Total Leads</p>
              <h3 className="text-3xl font-black">{leads.length}</h3>
            </div>
            <Users className="text-[#00FF88]" size={32} />
          </div>
        </div>
        <div className="glass-card p-6 border-l-4 border-yellow-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-xs uppercase font-bold mb-1">New/Pending</p>
              <h3 className="text-3xl font-black">{leads.filter(l => l.status === 'New').length}</h3>
            </div>
            <Clock className="text-yellow-500" size={32} />
          </div>
        </div>
        <div className="glass-card p-6 border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-xs uppercase font-bold mb-1">Contacted</p>
              <h3 className="text-3xl font-black">{leads.filter(l => l.status === 'Contacted').length}</h3>
            </div>
            <CheckCircle className="text-blue-500" size={32} />
          </div>
        </div>
      </div>

      {/* Leads Table Container */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
        {loading ? (
          <div className="p-20 text-center text-[#00FF88] animate-pulse font-bold tracking-widest">CONNECTING TO SERVER...</div>
        ) : filteredLeads.length === 0 ? (
          <div className="p-20 text-center text-gray-500">
            <p className="text-xl italic">No leads found at the moment.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/10 text-[#00FF88] uppercase text-xs tracking-widest">
                <tr>
                  <th className="p-5">Customer Details</th>
                  <th className="p-5">Contact Info</th>
                  <th className="p-5">Solar Service</th>
                  <th className="p-5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLeads.map((lead) => (
                  <motion.tr 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    key={lead._id} 
                    className="hover:bg-white/5 transition-all"
                  >
                    <td className="p-5">
                      <p className="font-black text-white uppercase tracking-tight">{lead.name}</p>
                      <p className="text-[10px] text-gray-500">ID: {lead._id.slice(-6)}</p>
                    </td>
                    <td className="p-5">
                      <div className="text-sm font-medium text-gray-300">{lead.mobile}</div>
                      <div className="text-xs text-gray-500 lowercase">{lead.email}</div>
                    </td>
                    <td className="p-5">
                      <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-[10px] font-bold text-blue-400">
                        {lead.serviceType}
                      </span>
                    </td>
                    <td className="p-5 text-center">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${
                        lead.status === 'New' ? 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/30' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {lead.status || 'New'}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
