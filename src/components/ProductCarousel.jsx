import { useState, useEffect,  useCallback } from "react";
import {  db  } from "../firebase";
import { collection, getDocs,  } from "firebase/firestore";
import Navbar from "./Navbar"; // Import Navbar jika digunakan

import Footer from "./Footer";


const ProductCarousel = () => {
  const [menuItems, setMenuItems] = useState([]);

  const [selectedType, setSelectedType] = useState("All");

  const menuCollectionRef = collection(db, "menuItems");

   
    const fetchMenuItems = useCallback(async () => {
      try {
        const data = await getDocs(menuCollectionRef);
        setMenuItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    }, [menuCollectionRef]); 
  
    useEffect(() => {
      fetchMenuItems();
    }, [fetchMenuItems]); 




  

  
  const filteredItems =
    selectedType === "All"
      ? menuItems
      : menuItems.filter((item) => item.type === selectedType);

  return (
    <div className="min-h-screen text-white px-8 py-16">
      <Navbar/>
      <div className="justify-self-center mb-8">
        {["All", "Foods", "Drinks"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 mx-2 font-semibold rounded ${
              selectedType === type
                ? "bg-yellow-400 text-black"
                : "border border-yellow-400 hover:bg-yellow-500 duration-300 hover:text-black text-yellow-400"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 pb-[5rem]">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-[#101010] border border-yellow-400 rounded-lg hover:scale-105 duration-300 p-4 hover:shadow-lg">
            <img
              src={item.image || "https://via.placeholder.com/150"}
              alt={item.title}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
            <p className="mt-4 font-bold text-yellow-400">{item.price}</p>
         
          </div>
        ))}
      </div>
        <Footer/>

      
    </div>
  );
};

export default ProductCarousel;