import React from "react";
import lauk from "../assets/mak5.jpg"
import lauk1 from "../assets/mak2.jpg"
import lauk2 from "../assets/mak3.jpg"

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className=" text-white rounded-md border border-yellow-500 p-6 text-center flex flex-col items-center">
      <img src={image} alt={title} className="mb-4 w-full h-64 rounded-lg" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-yellow-400 text-xl font-bold mt-2">{price}</p>
      <p className="text-sm mt-4">{description}</p>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-center gap-6 p-6 ">
      <ProductCard
        image={lauk}
        title="Nasi Telur Orek"
        price="Rp 15.000"
        description="Nikmati kelezatan nasi rames dengan perpaduan telur ususu dan orek tempe dalan 1 santapan besar rasakan sensasi rasa yang meledak di mulut."
      />
      <ProductCard
        image={lauk1}
        title="Nasi Rames Kulit"
        price="Rp 14.000"
        description="Nikmati kelezatan nasi rames kulit yang pedas yang bisa membuat mulut anda bergoyang manja dan rasakan sensasi yang mengebu gebu."
      />
      <ProductCard
        image={lauk2}
        title="Nasi Rames Ayam"
        price="Rp 17.000"
        description="Nikmati kelezatan nasi rames ayam yang enak yang bisa membuat mulut anda bergoyang manja dan rasakan sensasi yang mengebu gebu."
      />
    </div>
    
  );
};

export default ProductList;
