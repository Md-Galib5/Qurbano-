import Image from "next/image";

const Card = ({ cow }) => {
    if (!cow) return null;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image
                    src={cow.image}
                    alt="cow name"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{cow.name}</h2>
                <p>{cow.description}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;