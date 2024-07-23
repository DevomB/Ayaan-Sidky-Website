import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link href={href} onClick={handleClick} className="scroll-link">
      {title}
    </Link>
  );
};

export default NavLink;
