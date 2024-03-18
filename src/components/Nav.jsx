import React from 'react'
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants/index.js';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute w-full z-10'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={headerLogo} 
                alt='Logo'
                width={130}
                height={30}/>
            </a>
            <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>
              {navLinks.map((item) => (
                <li key={item.label}>
                     <a href={item.href} className='fonts-montserrat leading-normal text-lg text-slate-gray'>
                    {item.label}
                  </a> 
                </li>
              ))}
            </ul>
            <div className='hidden max-lg:block '> 
              <img src={hamburger} alt='hamburger' height={25} width={25} />  
            </div>
        </nav>
    </header>
  )
}

export default Nav