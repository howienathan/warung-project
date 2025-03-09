import React, { useState } from "react";
import logo from "../assets/logo 2.png"
import ProductCarousel from "./ProductCarousel";
import EditMakan from "./EditMakan";
import UserAccountTable from "./UserAccountTable";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function ResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Logout dari Firebase
      alert("Logout berhasil!");
      window.location.href = "/"; // Redirect ke halaman login
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Gagal logout. Coba lagi.");
    }
  };

  return (
    <div className="flex h-screen">

      <div
        className={`fixed top-0 left-0 h-full bg-yellow-500 rounded-r-3xl text-black transition-all duration-300 z-20 ${
          isOpen ? "w-56" : "w-16"
        } md:w-56`}
      >
        <div className="flex items-center justify-between p-4 md:justify-center">
          {!isOpen && (  
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-bold truncate"
            >
              <img src={logo} className="w-16" alt="" />
            </button>
          )}
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden text-black"
            >
              <i className='bx bx-arrow-back'></i>
            </button>
          )}
        </div>
        <nav
          className={`flex flex-col space-y-4 p-4 transition-all duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } md:opacity-100 md:visible`}
        >
            <h1 className="font-bold text-xl ">Warung <b className="text-white">Anpas</b></h1>
          <a href="/" className="hover:bg-[#150000] text-white hover:text-yellow-400 p-2 duration-300 rounded font-poppins pb-2 font-semibold">
          <i className='bx bxs-home pr-3'></i>Home 
          </a>
          <a href="/" className="hover:bg-[#150000] text-white hover:text-yellow-400 p-2 duration-300 rounded font-poppins pb-2 font-semibold">
          <i className='bx bx-arrow-back pr-2' ></i> Back
          </a>

          <button
            onClick={handleLogout} className="hover:bg-[#150000] text-white hover:text-yellow-400 p-2 duration-300 rounded font-poppins pb-2 font-semibold">
          <i className='bx bxs-door-open pr-3' ></i> Logout 

          </button>
        </nav>
      </div>

      <div className="flex-1 md:ml-64">
        <div className="p-4">

        <div className="grid grid-cols-1 sm:grid-cols-3 mx-[2rem] border-2 shadow-[0px_2px_30px_0px_#f6e05e] border-yellow-400 py-2 px-2 rounded-lg bg-[#150000] gap-2">
  <h1 className="text-lg text-white font-poppins font-semibold text-center sm:text-left">
    Warung <span className="font-AnakArsitek">Anpas</span>
  </h1>
  <h1 className="text-xl text-yellow-400 font-bold text-center">
    Only Admin
  </h1>
  <div className="bg-slate-900 text-white rounded-full border-yellow-400 border-2 py-1 px-4 font-jakarta font-semibold text-center ">
    adminhelmi@gmail.com
  </div>
</div>

         <EditMakan/>
         <UserAccountTable/>
        </div>
        <div>
            <div className="bg-slate-900"></div>
        </div>
      </div>
    </div>
  );
}
