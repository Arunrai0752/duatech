import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [leads, setLeads] = useState([]);
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // अपना मनपसंद पासवर्ड यहाँ लिखें
  const CORRECT_PASSWORD = "mysecretpassword123"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("Galat Password! Kripya sahi password dalein.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('https://duatech.onrender.com/api/leads')
        .then(res => setLeads(res.data))
        .catch(err => console.log(err));
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-900">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">Admin Login</h2>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-900 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition">
            Login to Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="text-3xl font-bold text-blue-900">Solar Leads Dashboard</h2>
          <button onClick={() => setIsLoggedIn(false)} className="text-red-500 font-bold underline">Logout</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-4 border">Name</th>
                <th className="p-4 border">Email</th>
                <th className="p-4 border">Mobile</th>
                <th className="p-4 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  <td className="p-4 border font-medium uppercase">{lead.name}</td>
                  <td className="p-4 border text-blue-600">{lead.email}</td>
                  <td className="p-4 border">{lead.mobile}</td>
                  <td className="p-4 border text-gray-500 text-sm">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
