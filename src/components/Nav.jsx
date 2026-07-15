import { useState } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
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
                className="
                relative inline-block
                font-montserrat leading-normal text-lg text-slate-gray
                transition-colors duration-300
                hover:text-coral-red
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-full
                after:bg-coral-red
                after:origin-left
                after:scale-x-0
                after:transition-transform
                after:duration-300
                hover:after:scale-x-100
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a
          href="/"
          className="
          relative inline-block transition-colors duration-300
          hover:text-coral-red
          after:content-['']
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-full
          after:bg-coral-red
          after:origin-left
          after:scale-x-0
          after:transition-transform
          after:duration-300
          hover:after:scale-x-100
          "
          >
            Sign in
          </a>
          <span>/</span>
          <a
          href="/"
          className="
          relative inline-block transition-colors duration-300
          hover:text-coral-red
          after:content-['']
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-full
          after:bg-coral-red
          after:origin-left
          after:scale-x-0
          after:transition-transform
          after:duration-300
          hover:after:scale-x-100
          "
          >
          Explore now
        </a>
        </div>
        <div className='hidden max-lg:block' onClick={handleMenuToggle}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        
        <div
        className={`fixed top-0 right-0 hidden max-lg:block w-2/3 max-w-xs h-full
                   bg-white/10 backdrop-blur-xl backdrop-saturate-150
                   border-l border-white/10 shadow-2xl z-40
                   transform transition-transform duration-300 ease-in-out
                   
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          
          <button
          onClick={handleMenuToggle}
          className='absolute top-4 right-4 text-3xl font-light text-slate-700 hover:text-coral-red transition-colors'
          >
          &times;
          </button>
          
          <ul className='flex flex-col gap-6 mt-16 ml-8'>
            {navLinks.map((item) => (
              <li key={item.label}>
                
                <a
                href={item.href}
                onClick={handleMenuToggle}
                className="relative inline-block font-montserrat leading-normal text-lg text-slate-gray transition-colors duration-300 hover:text-coral-red"
                >
                  {item.label}
                  </a>
                  </li>
                ))}
          </ul>
          </div>

      </nav>
     <div
  onClick={handleMenuToggle}
  className={`fixed inset-0 z-30 hidden max-lg:block
    bg-black/10 backdrop-blur-sm
    transition-opacity duration-300
    ${
      isMenuOpen
        ? "opacity-100 visible pointer-events-auto"
        : "opacity-0 invisible pointer-events-none"
    }`}
/>
    </header>
  );
};

export default Nav;
