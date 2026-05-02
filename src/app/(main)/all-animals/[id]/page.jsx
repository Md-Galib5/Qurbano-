import React from 'react';
import Image from "next/image";
import { FaCow } from "react-icons/fa6";
import { GiAnimalSkull } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

const DetailsPage = async ({params}) => {
    const {id} = await params;

    const res = await fetch("https://qurbano.vercel.app/data.json", {
        cache: "no-store",
    });
    const animals = await res.json();

    const animal = animals.find(cow => cow.id == id)

    return (
        <div className='flex justify-between w-full lg:w-[83%] mx-auto mt-5 px-4 sm:px-0'>
            <div>
                <div>
                    <Image
                                    src={animal.image}
                                    alt="animal name"
                                    width={1400}
                                    height={850}
                                    className="w-full h-80 object-cover"
                                />
                    <h2 className='text-2xl font-semibold mt-3'>{animal.name}</h2>
                    <p className="text-2xl font-semibold text-green-600">Taka {animal.price}</p>

                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2 text-gray-600'><FaCow />Type</p>
                        <p className='text-gray-600 font-semibold text-center'>{animal.type}</p>
                        <p></p>
                    </div>

                     <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2 text-gray-600'><GiAnimalSkull />Breed</p>
                        <p className='text-gray-600 font-semibold flex flex-col text-center'>{animal.breed}</p>
                        <p></p>
                    </div>

                     <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2 text-gray-600'><GiWeight />Weight</p>
                        <p className='text-gray-600 font-semibold flex flex-col text-center'>{animal.weight} Kg</p>
                        <p></p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2 text-gray-600'><IoTime />Age</p>
                        <p className='text-gray-600 font-semibold flex flex-col text-center'>{animal.age} Years</p>
                        <p></p>
                    </div>

                     <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2 text-gray-600'><FaLocationDot />Location</p>
                        <p className='text-gray-600 font-semibold text-center'>{animal.location}</p>
                        <p></p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2 text-gray-600'><BiSolidCategory />Category</p>
                        <p className='text-gray-600 font-semibold text-center'>{animal.category}</p>
                        <p></p>
                    </div>

                    <div className='border border-b-gray-300 mt-5'></div>

                    <div className='mt-3'>
                        <h2 className='text-xl font-bold'>About This Animals</h2>
                        <p>{animal.description}</p>
                    </div>
                    

                </div>
                
            </div>
            <div>Right</div>
        </div>
    );
};

export default DetailsPage;