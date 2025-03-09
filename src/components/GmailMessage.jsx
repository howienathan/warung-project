import React from "react";

const GmailMessage = () => {
  const emailAddress = "jonathanaugta3@gmail.com"; 
  const subject = "Kritik dan saran tentang Produk"; 
  const body = "Halo, Menurut saya produk anda ";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoLink}
      className=""
    >
      Kirim Kritik Dan Saran 
    </a>
  );
};

export default GmailMessage;
