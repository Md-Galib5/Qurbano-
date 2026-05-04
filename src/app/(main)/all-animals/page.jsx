"use client";

import { useEffect, useState } from "react";
import Card from "@/components/shared/Card";

const AllAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await fetch("https://qurbano.vercel.app/data.json");
      const data = await res.json();

      setTimeout(() => {
        const sorted = [...data].sort(
          (a, b) => Number(b.price) - Number(a.price)
        );

        setAnimals(sorted);
        setLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full lg:w-[83%] mx-auto mt-5 px-4 sm:px-0">
      <h2 className="text-xl font-bold text-green-700">All Animals</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {animals.map((animal) => (
            <Card key={animal.id} cow={animal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAnimals;