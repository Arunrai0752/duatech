import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const submitLead = (data) => axios.post(`${API_URL}/leads`, data);
export const getLeads = (token) => axios.get(`${API_URL}/admin/leads`, {
    headers: { Authorization: `Bearer ${token}` }
});
export const updateLeadStatus = (id, status, token) => axios.put(`${API_URL}/admin/leads/${id}`, { status }, {
    headers: { Authorization: `Bearer ${token}` }
});
