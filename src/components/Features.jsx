import React from "react";
import uang from '../assets/simboldol.png'
import fast from '../assets/arrow.png'
import quality from '../assets/quality man.png'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-yellow-400 text-black rounded-md shadow-md p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-6 ">
      <FeatureCard
        icon={<img src={uang} alt="Icon 1" className="pb-8"/>}
        title="Murah"
        description="Nongkrong lebih hemat di warung kami"
      />
      <FeatureCard
        icon={<img src={fast} alt="Icon 2" />}
        title="Berkualitas"
        description="Produk yang berkualitas premium"
      />
      <FeatureCard
        icon={<img src={quality} alt="Icon 3" />}
        title="Ramah & Cepat"
        description="Pelayanan ramah dan cepat"
      />
    </div>
  );
};

export default Features;
