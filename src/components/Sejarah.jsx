import React, { useState, useEffect } from 'react';
import AutoImageSlider from './AutoImageSlider';
import Zeus from '../assets/own1.jpg';
import anjay from '../assets/tem1.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


const Sejarah = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <section className="scrollbar-hidden  w-full h-full text-white">
      <Navbar/>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-[5rem]'>
            <AutoImageSlider/>
            <div>
                <h1 className='text-4xl font-Lora text-yellow-400 font-semibold'>Sejarah</h1>
                <p className='pt-5 '>Warung kami telah beroperasi sejak tahun 2022 dan terus berkomitmen untuk memberikan pelayanan terbaik kepada setiap pengunjung. Kami selalu mengutamakan kualitas, baik dalam hal makanan, minuman, maupun suasana yang kami ciptakan. Dengan lingkungan yang bersih, nyaman, dan penuh kehangatan, kami berharap setiap pelanggan yang datang dapat merasa aman, santai, serta betah untuk menikmati waktu di warung kami. Kepuasan pelanggan adalah prioritas utama kami, dan kami akan terus berinovasi serta meningkatkan pelayanan demi memberikan pengalaman terbaik bagi setiap pengunjung.</p>
            </div>
        </div>
        <div className='py-[3rem]  justify-center grid grid-cols-2 gap-3'>
            <img src={Zeus} alt="" className='rounded-md' />
            <img src={anjay} alt="" className='rounded-md' />
        </div>
        <div className='pt-5'>
            <p className='font-Lora text-xl'>Dalam satu frame gambar ini, tergambar sinergi antara Owner dan Kolaborator yang bekerja sama untuk menciptakan sesuatu yang luar biasa. Owner, sebagai pemilik dan penggerak utama, membawa visi, strategi, dan semangat dalam membangun usaha. Sementara itu, Kolaborator berperan sebagai mitra yang turut memberikan ide, kreativitas, serta kontribusi nyata dalam menjalankan dan mengembangkan bisnis.

Kebersamaan mereka mencerminkan kerja sama yang harmonis, di mana setiap pihak saling melengkapi dan berbagi peran demi mencapai tujuan bersama. Dengan komunikasi yang baik dan semangat gotong royong, mereka menciptakan lingkungan kerja yang produktif, inovatif, dan penuh inspirasi.
            </p>
        </div>
    <Footer/>
    </section>
  );
};

export default Sejarah;
