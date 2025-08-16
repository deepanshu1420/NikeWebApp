import { useState } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-30 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block' onClick={handleMenuToggle}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        {isMenuOpen && (
          <div className='fixed top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg z-40 transition-transform transform translate-x-0 max-lg:block'>
            <button
              onClick={handleMenuToggle}
              className='absolute top-4 right-4 text-2xl font-bold'
            >
              &times;
            </button>
            <ul className='flex flex-col gap-6 mt-16 ml-8'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='block font-montserrat leading-normal text-lg text-slate-gray'
                    onClick={handleMenuToggle} // Close the menu on click
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-30'
          onClick={handleMenuToggle}
        ></div>
      )}
    </header>
  );
};

export default Nav;
