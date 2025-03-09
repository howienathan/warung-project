import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "62895632590635"; 
  const message = "Halo, saya ingin bertanya tentang produk Anda."; 


  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      Click Disini Untuk menghubungi kami
    </a>
  );
};

export default WhatsAppButton;
