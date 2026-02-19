import React from "react";

const Products = () => {
  const categories = [
    {
      title: "Solar Panels",
      brands: ["Adani", "Tata", "Waaree", "Panasonic", "Polycab"],
    },
    {
      title: "Solar Inverters",
      brands: ["Solis", "Sungrow", "Growatt", "Microtek", "Havells"],
    },
    {
      title: "Solar Cables",
      brands: ["KEI", "Polycab", "Havells", "RR Kabel"],
    },
    {
      title: "Mounting Structures",
      brands: ["SDGI", "Hot-Dip GI", "Galvanised Frames"],
    },
  ];

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-orange-600">
        Products & Partners
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-blue-800">{cat.title}</h2>

            <ul className="mt-4 space-y-1">
              {cat.brands.map((brand, i) => (
                <li key={i} className="text-gray-700 text-lg">
                  • {brand}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

