import React, { useEffect, useState } from 'react';
import { getLeads, updateLeadStatus } from '../api/leadApi';
import { Download, Search, Filter, RefreshCw } from 'lucide-react';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState('');
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await getLeads(token);
      setLeads(res.data);
    } catch (err) { console.error("Error fetching leads"); }
  };

  const handleStatusChange = async (id, newStatus) => {
    await updateLeadStatus(id, newStatus, token);
    fetchLeads();
  };

  // CSV Export Function
  const exportToCSV = () => {
    const headers = "Date,Name,Email,Mobile,Category,Capacity,Status\n";
    const rows = leads.map(l => `${new Date(l.date).toLocaleDateString()},${l.firstName} ${l.lastName},${l.email},${l.mobile},${l.category},${l.capacity},${l.status}`).join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DUVA_Tech_Leads.csv';
    a.click();
  };

  return (
    <div className="p-6 lg:p-12 bg-[#0A1F44] min-h-screen text-white pt-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-[#00FF88] tracking-tighter">ADMIN CONTROL PANEL</h1>
        <button onClick={exportToCSV} className="flex items-center gap-2 bg-[#00FF88] text-[#0A1F44] px-6 py-2 rounded-full font-bold hover:bg-white transition-all">
          <Download size={20} /> EXPORT CSV
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-[#00FF88] uppercase text-sm">
              <th className="p-4">Date</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Category</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 text-gray-400">{new Date(lead.date).toLocaleDateString()}</td>
                <td className="p-4 font-semibold">{lead.firstName} {lead.lastName}</td>
                <td className="p-4">
                    <p className="text-sm">{lead.email}</p>
                    <p className="text-xs text-[#00FF88]">{lead.mobile}</p>
                </td>
                <td className="p-4"><span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">{lead.category}</span></td>
                <td className="p-4 text-xs font-bold uppercase" style={{ color: lead.status === 'Pending' ? '#FFD700' : '#00FF88' }}>{lead.status}</td>
                <td className="p-4">
                  <select 
                    onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                    className="bg-[#0A1F44] border border-[#00FF88]/50 text-xs rounded p-1 outline-none"
                  >
                    <option value="">Update</option>
                    <option value="In-Progress">In-Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
