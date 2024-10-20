import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { styles } from '../styles';
import { logo } from '../assets';

const Navbar = () => {
  return (
<nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent backdrop-blur-md`}>
  <div className="flex items-center justify-center w-full max-w-7xl mx-auto">
    <Link
      to="/"
      className='flex items-center gap-2'
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <img src={logo} alt='logo' className="w-9 h-9 object-contain" />
      <p className='text-white text-[18px] font-bold'>3D-Renderer</p>
    </Link>
  </div>
</nav>
  )
}

export default Navbar