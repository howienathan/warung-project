import React from 'react'
import warung from '../assets/aw1.jpg'
import menu from '../assets/aw2.jpg'
import uang from '../assets/money.png'
import jempol from '../assets/fast.png'
import berkualitas from '../assets/quality man.png'
import minuman from '../assets/minuman.jpg'
import Features from './Features'
import ProductList from './ProductList'



const HomePage = () => {
  return (
    <section className='text-white pt-[5rem] px-[2rem]'>
<div id='Home' className="bg-gradient-to-b from-[#ffffff42] bg-opacity-20 bg-blend-saturation to-[#150000] text-white p-6 duration-300 rounded-xl text-start shadow-lg max-w-7xl w-full mx-auto mt-10">
      <div className="grid md:grid-cols-2 gap-6 items-center ">
        <div className="grid grid-cols-2 gap-4">
          <img
            src={warung}
            alt="Warung Anpas"
            className="rounded-lg shadow-md "
          />
          <img
            src={menu}
            alt="Warung Anpas"
            className="rounded-lg shadow-md"
          />
        </div>
        <div id='Home'>
          <h1 className="text-yellow-400 text-4xl pb-[1rem] font-bold mb-4">
            Kenyang Hemat Bersama
            <br />
            <span className='text-white'>

            Warung Anpas!
            </span>
          </h1>
          <p className="text-gray-300 mb-6 pb-2">
            Warung Anpas ini lebih dari sekadar tempat makan – kami menghadirkan
            hidangan lezat, harga bersahabat, cocok untuk menghabiskan waktu
            berkualitas bersama keluarga dan teman. warung makan kami siap
            menyambut Anda dengan suasana yang nyaman, pelayanan ramah, dan rasa
            yang tidak pernah mengecewakan.
          </p>
          
        </div>

      </div>
    </div>


    <div className='pt-[8rem] items-center text-center' id='About'>
    <h1 className='text-2xl font-AnakArsitek pb-3'>Kenapa Harus Ke</h1>
    <h1 className='text-yellow-400 text-3xl font-poppins font-semibold'>Warung <b className='text-white font-AnakArsitek'>Anpas?</b></h1>
    <p className='text-lg pt-5 font-jakarta'>Di Warung Anpas, kami percaya bahwa makanan bukan hanya soal kenyang, tapi tentang menciptakan pengalaman yang menghubungkan orang. Setiap hidangan yang kami sajikan dipersiapkan dengan penuh cinta dan menggunakan bahan-bahan pilihan, dengan tujuan untuk memberikan rasa yang autentik dan menggugah selera. </p>
    </div>
    
    <Features/>

    <div className='pt-[5rem]'>
    <h1 className='text-3xl font-poppins font-semibold text-yellow-400 pb-[3rem] text-center'>Hightlight menu </h1>
    <p>Menu ini dirancang khusus untuk memberikan Anda pengalaman terbaik dalam menjelajahi website kami. Dengan sekali klik, Anda dapat mengakses semua fitur unggulan, penawaran spesial, dan informasi penting yang kami siapkan. Kami percaya, waktu Anda sangat berhargakarena itu, semua dibuat sederhana, cepat, dan efisien. </p>
    </div>
    <ProductList/>
    <div className='pt-[2rem]'>
    <a href='/Menu' className="border border-yellow-500 text-yellow-400 duration-300 hover:text-white hover:border-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
            Lihat Menu &rarr;
          </a>
          </div>
    </section>
  )
}

export default HomePage