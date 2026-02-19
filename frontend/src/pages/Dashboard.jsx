import React, { useEffect, useState } from 'react';
import { getLeads } from '../api/leadApi';
import { Download, Table } from 'lucide-react';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const data = await getLeads();
        setLeads(data);
      } catch (err) {
        console.error("Leads लोड नहीं हो पाईं");
      }
    };
    fetchLeads();
  }, []);

  const downloadCSV = () => {
    const headers = "Name,Mobile,Email,Service,Status\n";
    const csvData = leads.map(l => `${l.name},${l.mobile},${l.email},${l.serviceType},${l.status}`).join("\n");
    const blob = new Blob([headers + csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Duatech_Leads.csv';
    a.click();
  };

  return (
    <div className="p-8 bg-[#0A1F44] min-h-screen text-white pt-24">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black text-[#00FF88] tracking-widest uppercase">Lead Control Room</h1>
        <button onClick={downloadCSV} className="bg-[#00FF88] text-[#0A1F44] px-6 py-2 rounded-full font-bold flex gap-2 items-center hover:bg-white transition-all">
          <Download size={18} /> Export CSV
        </button>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-[#00FF88]/10 text-[#00FF88]">
            <tr>
              <th className="p-4">Customer Name</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Service</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                <td className="p-4 font-bold uppercase">{lead.name}</td>
                <td className="p-4 text-sm text-gray-400">{lead.mobile} <br/> {lead.email}</td>
                <td className="p-4 text-xs font-semibold">{lead.serviceType}</td>
                <td className="p-4"><span className="text-[#00FF88] bg-[#00FF88]/10 px-3 py-1 rounded-full text-[10px]">{lead.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
