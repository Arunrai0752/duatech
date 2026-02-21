import axios from 'axios';

// आपका Render वाला बैकएंड लिंक (जो आपने फोटो में दिखाया है)
const API_URL = "https://duatech-1.onrender.com/api/login"; 

/**
 * 1. नया लीड (Lead) सबमिट करने के लिए
 * होम पेज का फॉर्म इसी फंक्शन को कॉल करेगा
 */
export const submitLead = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/leads`, data);
        return response.data;
    } catch (error) {
        console.error("Error submitting lead:", error);
        throw error;
    }
};

/**
 * 2. सभी लीड्स को देखने के लिए (Admin Dashboard के लिए)
 */
export const getLeads = async () => {
    try {
        const response = await axios.get(`${API_URL}/admin/leads`);
        return response.data;
    } catch (error) {
        console.error("Error fetching leads:", error);
        throw error;
    }
};

/**
 * 3. लीड का स्टेटस अपडेट करने के लिए (Pending -> Completed)
 */
export const updateLeadStatus = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/admin/leads/${id}`, { status });
        return response.data;
    } catch (error) {
        console.error("Error updating status:", error);
        throw error;
    }
};
