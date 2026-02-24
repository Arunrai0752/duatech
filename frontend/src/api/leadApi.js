import axios from 'axios';

// Render Backend Link - Base URL fix kiya hai
const API_URL = "https://duatech-1.onrender.com/api"; 

export const submitLead = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/leads`, data);
        return response.data;
    } catch (error) {
        console.error("Submission Bug:", error.response?.data || error.message);
        throw error;
    }
};

export const getLeads = async () => {
    try {
        const response = await axios.get(`${API_URL}/admin/leads`);
        return response.data;
    } catch (error) {
        console.error("Fetch Bug:", error.response?.data || error.message);
        throw error;
    }
};
