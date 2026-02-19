import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "500kW Industrial Solar Plant",
      img: "https://images.pexels.com/photos/987544/pexels-photo-987544.jpeg",
    },
    {
      name: "50kW Commercial Rooftop Plant",
      img: "https://images.pexels.com/photos/159397/sun-energy-electricity-industry-159397.jpeg",
    },
    {
      name: "5kW Residential Plant",
      img: "https://images.pexels.com/photos/2850472/pexels-photo-2850472.jpeg",
    },
  ];

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-orange-600">
        Our Completed Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {projectList.map((p, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-lg overflow-hidden hover:scale-[1.03] transition"
          >
            <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-800">{p.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
