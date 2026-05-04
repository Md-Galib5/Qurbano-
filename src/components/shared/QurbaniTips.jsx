import "animate.css";
import { FaShieldAlt, FaLeaf, FaUsers } from "react-icons/fa";

const tips = [
  {
    id: 1,
    title: "Healthy Animal",
    desc: "Choose animals that are active, disease-free and well-fed. Ensure proper nutrition before Qurbani.",
    icon: <FaShieldAlt />,
  },
  {
    id: 2,
    title: "Clean Environment",
    desc: "Maintain hygiene and provide a natural environment to keep animals stress-free and healthy.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Community Responsibility",
    desc: "Distribute meat properly among family, relatives, and the needy following Islamic guidelines.",
    icon: <FaUsers />,
  },
];

const QurbaniTips = () => {
  return (
    <section className="py-16">
      <div className="border border-gray-100 mb-10"></div>

      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-green-700 mb-12 animate__animated animate__fadeInUp animate__slow">
          Qurbani Tips
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {tips.map((tip, index) => (
            <div
              key={tip.id}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition duration-300 
              animate__animated animate__fadeInUp"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: "0.8s",
                animationFillMode: "both",
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-600 text-white p-4 rounded-full text-xl animate__animated animate__zoomIn"
                     style={{ animationDelay: `${index * 0.3 + 0.2}s` }}>
                  {tip.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {tip.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;