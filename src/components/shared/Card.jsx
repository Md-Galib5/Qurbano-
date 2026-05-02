import Image from "next/image";
import Link from "next/link";
import { FaWeight, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";


const Card = ({ cow,animal }) => {

    if (!cow) return null;

    return (
        <div className="card shadow-md p-6">
            <figure>
                <Image
                    src={cow.image}
                    alt="cow name"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
            </figure>

            <div className="mx-4 mt-3 space-y-3">
                <h2 className="card-title font-bold text-lg">{cow.name}</h2>
                <p className="text-gray-600 line-clamp-2">{cow.description}</p>
                <p className="text-xl font-semibold text-green-600">Taka {cow.price}</p>
                <div className="flex items-center gap-3">
                    <p className="text-gray-600">{cow.weight}Kg</p>
                    <p className="font-bold">.</p>
                    <p className="text-gray-600">{cow.age} Years</p>
                    <p className="font-bold">.</p>
                    <p className="text-gray-600">{cow.location}</p>
                </div>
                <Link href={`/all-animals/${cow.id}`}>
  <button className='btn w-full bg-green-400 text-white'>
    Details
  </button>
</Link>
            </div>
        </div>
    );
};

export default Card;