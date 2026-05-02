import React from 'react';
import Image from "next/image";
import { FaCow } from "react-icons/fa6";
import { GiAnimalSkull } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import BookingPage from "../[id]/BookingPage"

const DetailsPage = async ({params}) => {
    const {id} = await params;

    const res = await fetch("https://qurbano.vercel.app/data.json", {
        cache: "no-store",
    });
    const animals = await res.json();

    const animal = animals.find(cow => cow.id == id)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:w-[83%] mx-auto mt-5 px-4 sm:px-0">
            <div>
                <div className='shadow-2xl p-5 space-y-2'>
                    <Image
                                    src={animal.image}
                                    alt="animal name"
                                    width={1400}
                                    height={850}
                                    className="w-full h-80 object-cover"
                                />
                    <h2 className='text-2xl font-semibold mt-3'>{animal.name}</h2>
                    <p className="text-2xl font-semibold text-green-600">Taka {animal.price}</p>

                   <div className="space-y-3">

  <div className="flex items-center justify-between border-b pb-2">
    <p className="flex items-center gap-2 text-gray-600">
      <FaCow /> Type
    </p>
    <p className="font-semibold">{animal.type}</p>
  </div>

  <div className="flex items-center justify-between border-b pb-2">
    <p className="flex items-center gap-2 text-gray-600">
      <GiAnimalSkull /> Breed
    </p>
    <p className="font-semibold">{animal.breed}</p>
  </div>

  <div className="flex items-center justify-between border-b pb-2">
    <p className="flex items-center gap-2 text-gray-600">
      <GiWeight /> Weight
    </p>
    <p className="font-semibold">{animal.weight} Kg</p>
  </div>

  <div className="flex items-center justify-between border-b pb-2">
    <p className="flex items-center gap-2 text-gray-600">
      <IoTime /> Age
    </p>
    <p className="font-semibold">{animal.age} Years</p>
  </div>

  <div className="flex items-center justify-between border-b pb-2">
    <p className="flex items-center gap-2 text-gray-600">
      <FaLocationDot /> Location
    </p>
    <p className="font-semibold">{animal.location}</p>
  </div>

  <div className="flex items-center justify-between">
    <p className="flex items-center gap-2 text-gray-600">
      <BiSolidCategory /> Category
    </p>
    <p className="font-semibold">{animal.category}</p>
  </div>

</div>

                    <div className='border border-b-gray-300 mt-5'></div>

                    <div className='mt-3'>
                        <h2 className='text-xl font-bold'>About This Animals</h2>
                        <p>{animal.description}</p>
                    </div>
                    

                </div>
                
            </div>
           <BookingPage />
        </div>
    );
};

export default DetailsPage;