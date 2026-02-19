import React from "react";

const Testimonials = () => {
  const data = [
    {
      name: "Rohit Sharma",
      msg: "Very professional installation. My 5kW plant works perfectly!",
    },
    {
      name: "Priya Mehta",
      msg: "Fast service and best quality panels. Highly recommended!",
    },
    {
      name: "VARUN",
      msg: "Affordable pricing and premium branded materials!",
    },
  ];

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-orange-600">
        What Customers Say
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {data.map((d, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-blue-800">{d.name}</h2>
            <p className="text-gray-700 mt-2">{d.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
