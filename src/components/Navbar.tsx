import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 fixed bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={()=>{
            setActive("");
            window.scrollTo(0, 0)
          }}>
          <img src={logo} className='w-9 h-9 object-contain'></img>
          <p className='text-white text-[18px] flex font-bold cursor-pointer'>Minh &nbsp;</p>
        </Link>
        <ul className='hidden gap-10 list-none sm:flex'>
          {navLinks.map(item => {
            return (
              <li key={item.id}
                onClick={() => setActive(item.title)}
                className={`${active === item.title ? 'text-white' : 'text-secondary'} text-[18px] font-medium hover:text-white cursor-pointer`}>
                <a href={`#${item.id}`}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Toggle Menu */}
        <div className='sm:hidden flex justify-end items-center'>
          <img src={toggle ? close : menu}
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} absolute top-16 right-0 mx-4 my-2 z-10 p-6 black-gradient rounded-xl min-w-[140px] `}>
            <ul className='list-none flex flex-col gap-4 justify-start items-start'>
              {navLinks.map(item => {
                return (
                  <li key={item.id}
                    onClick={() => {
                      setActive(item.title);
                      setToggle(!toggle);
                    }}
                    className={`${active === item.title ? 'text-white' : 'text-secondary'} text-[16px] font-medium hover:text-white cursor-pointer`}>
                    <a href={`#${item.id}`}>
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar