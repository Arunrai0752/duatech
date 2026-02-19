// ===============================
// 🔥 leadApi.js — FRONTEND API FILE
// ===============================

// NOTE:
// 👉 यहाँ तू अपने Database/API endpoint का URL डालना
// 👉 Example: https://your-database.com/saveLead
// 👉 अभी temporary demo link डाल रखा है (तू बदल देगा)

const API_URL = "https://your-database-url.com/api/lead";

// =======================================
// 📝 SAVE LEAD FUNCTION
// =======================================

export const saveLead = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return {
      success: true,
      message: "Lead Saved Successfully!",
      data,
    };
  } catch (error) {
    console.error("Lead API Error:", error);

    return {
      success: false,
      message: "Failed to submit lead",
      error,
    };
  }
};
