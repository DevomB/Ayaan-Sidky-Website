import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <div className="logo-container">
          <Image src="/images/new-as-trans-logo.png" alt="Logo" layout="intrinsic" width={200} height={200} />
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
