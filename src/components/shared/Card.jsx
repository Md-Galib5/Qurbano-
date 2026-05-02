import Image from "next/image";

const Card = ({ cow }) => {

    if (!cow) return null;

    return (
        <div className="card bg-base-100 shadow-sm p-6">
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
                <p className="text-gray-600">{cow.description}</p>
                <p className="text-xl font-semibold text-green-600">Taka {cow.price}</p>
                <div className="flex items-center gap-3">
                    <p className="text-gray-600">{cow.weight}Kg</p>
                    <p className="font-bold">.</p>
                    <p className="text-gray-600">{cow.age} Years</p>
                    <p className="font-bold">.</p>
                    <p className="text-gray-600">{cow.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;