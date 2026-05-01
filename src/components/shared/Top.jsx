import React from "react";
import Card from "./Card";

const Top = async () => {
    const res = await fetch("https://qurbano.vercel.app/data.json", {
        cache: "no-store",
    });

    const data = await res.json();

    // console.log(data);

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-2xl font-bold">Featured Animals</h2>
            {data.map(cow => 
                // <h2 key={cow.id}>{cow.image}</h2>
                <Card key={cow.id} cow={cow} />
            )}
        </div>
    );
};

export default Top;