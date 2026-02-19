import React from "react";

const Dashboard = () => {
  return (
    <div className="pt-32 px-6">
      <h1 className="text-4xl font-bold text-orange-600">Admin Dashboard</h1>

      <p className="text-lg text-gray-700 mt-4">
        यहाँ तेरे database से आने वाले leads दिखेंगे।
        तू सिर्फ backend URL बदल देगा — बस काम हो गया।
      </p>

      <div className="mt-10 p-6 border rounded-xl bg-gray-50 shadow-lg">
        <p className="text-gray-600">🚧 Lead data fetching area will show here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
