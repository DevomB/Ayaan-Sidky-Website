import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-black">
      <div className="container p-12 flex flex-col items-center">
        <div className="logo-container mb-4">
          <Image
            src="/images/new-as-trans-logo.png"
            alt="Logo"
            layout="intrinsic"
            width={75}
            height={75}
          />
        </div>
        <a
          href="https://github.com/devom-brahmbhatt"
          className="text-lg text-[#FFD700] font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Devom Brahmbhatt
        </a>
      </div>
    </footer>
  );
};

export default Footer;
