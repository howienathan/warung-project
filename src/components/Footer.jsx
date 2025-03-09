import React from 'react'
import toko from "../assets/logoo.png";
import 'boxicons/css/boxicons.min.css';
import WhatsAppButton from './WhatsappButton';
import GmailMessage from './GmailMessage';

const Footer = () => {
  return (
    <footer className="text-white py-8 px-6 ">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

      <div className="text-center sm:text-left">
        <img src={toko} alt="Logo" className="mb-4 mx-auto sm:mx-0 w-40 h-20" />
        <h1 className="text-2xl font-bold">Warung <b className='text-yellow-400 text-3xl font-bold font-AnakArsitek'>Anpas</b></h1>
        <p className="text-gray-400 mt-2">
          Menyediakan makanan yang murah dan enak
        </p>
      </div>


      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-4">
        <a href="https://www.tiktok.com/@warungmakananpas.smg?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className='hover:scale-105 bg-white rounded-md duration-300'>
        <img src="https://img.icons8.com/?size=30&id=118638&format=png&color=000000" />
    </a>
    <a href="https://www.instagram.com/warungmakananpas.smg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className='hover:scale-105 bg-white rounded-md duration-300'>
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
        </div>
      </div>

     
      <div className="text-center sm:text-left">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <a href='' className="flex items-center justify-center sm:justify-start bg-red-500 text-white py-2 px-4 duration-300 rounded-lg hover:bg-red-600 transition">
          <i className="bx bxs-envelope mr-2"></i> <GmailMessage/>
        </a>
        <a  className="flex items-center justify-center sm:justify-start cursor-pointer hover:bg-green-500 duration-300 bg-green-400 py-2 px-2 rounded-lg text-white font-bold  mt-2">
         
          <i className="bx bxs-phone mr-2"></i>  <WhatsAppButton/>
        </a>
      </div>
    </div>

    <hr className="border-t border-yellow-400 my-6" />
    <p className="text-center sm:text-start text-gray-500 text-sm">
      © 2024 Warung Anpas Inc. All rights reserved.
    </p>
  </footer>
  )
}

export default Footer