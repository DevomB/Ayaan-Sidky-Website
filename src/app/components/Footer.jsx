import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col justify-center items-center">
        <div className="logo-container mb-4">
          <Image src="/images/new-as-trans-logo.png" alt="Logo" layout="intrinsic" width={75} height={75} />
        </div>
        <a 
          href="https://github.com/devom-brahmbhatt" 
          className="text-green-500 text-center hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Made by Devom Brahmbhatt
        </a>
        <p className="text-slate-600 mt-4">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
