import React from "react";
import Card from "./Card";

const Top = async () => {
  const res = await fetch("https://qurbano.vercel.app/data.json", {
    cache: "no-store",
  });

  const animals = await res.json();
  const data = [...animals]
    .sort((a, b) => Number(b.price) - Number(a.price))
    .slice(0, 6);

  return (
    <div className="container mx-auto mt-10 px-4 sm:px-0">
      <h2 className="text-2xl font-bold text-green-700">Featured Animals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {data.map((cow) => (
          <Card key={cow.id} cow={cow} />
        ))}
      </div>
    </div>
  );
};

export default Top;