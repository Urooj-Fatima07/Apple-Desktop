import React from 'react';
import { appleImg, bagImg,  searchImg } from '../utils';
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <div>
      <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center"> 
        <nav className='flex w-full screen-max-width'>
          <img src={appleImg} alt="Apple" width={14} height={18} />

          {/* Render navigation items based on screen size */}
          <div className='flex flex-1 justify-center max-sm:hidden'>
            {navLists.map((nav) => (
              <div className='px-5 text-sm cursor-pointer text-gray hover: text-white transition-all' key={nav}>
                {nav}
              </div>
            ))}
          </div>

          <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
           <img src={searchImg} alt="" height={18} width={18} />
           <img src={bagImg} alt="" height={18} width={18} />
          </div>
        </nav>
      </header> 
    </div>
  );
};

export default Navbar;
