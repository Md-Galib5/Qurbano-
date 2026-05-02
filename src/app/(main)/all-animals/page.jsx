import Card from '@/components/shared/Card';
import React from 'react';

const AllAnimals = async() => {
    const res = await fetch("https://qurbano.vercel.app/data.json", {
        cache: "no-store",
    });
    const animals = await res.json();
    console.log(animals)

    return (
        <div className="w-full lg:w-[83%] mx-auto mt-5 px-4 sm:px-0">
            <h2 className='text-xl font-bold'>All Animals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {animals.map(animal =>{
                  return  <Card key = {animal.id} cow = {animal} />
                })}
            </div>
        </div>
    );
};

export default AllAnimals;