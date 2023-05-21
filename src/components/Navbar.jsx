const navbar = [

  {
    id: 1,
    name: 'About',
    path: '/about',
  },

  {
    id: 2,
    name: 'Projects',
    path: '/projects',
  },

  {
    id: 3,
    name: 'Technology',
    path: '/technology',
  },

  {
    id: 4,
    name: 'Uses',
    path: '/uses',
  },

  
]

import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleToggleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Adjust the breakpoint value as per your requirements
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='max-w-2xl  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-10  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12'>

        <div className='hidden md:flex md:items-center md:justify-between'>

          <div>
            <Link className='font-h1 hover:text-[#45F0DF] focus:text-[#45F0DF]' to='/'>sIUzy.web</Link>
            </div>

            <div className='flex items-center'>
            {navbar.map((data ,index) => (
              <Link key={index} className='px-2 font-h1 hover:text-[#45F0DF] focus:text-[#45F0DF]' to={data.path}>{data.name}</Link>
              ))}

            </div>

        </div>

          <div className='flex items-center justify-between md:hidden'>
               <div>
               <Link className='font-h1 hover:text-[#45F0DF] focus:text-[#45F0DF]' to='/'>sIUzy.web</Link>
                </div>   

                <div className='' onClick={handleToggleNav}>
                   {nav ? <AiOutlineClose size={30}/> : <RxHamburgerMenu  size={30}/> } 
                </div>


            </div>

            {/* mobile view navbar */}

            <div className={nav ? 'bg-black h-screen w-4/5 fixed top-0 left-0 py-10 px-3 ease-in-out duration-500' : 'fixed left-[-100%]' }>
              
            <div>
            <Link className='font-h1 hover:text-[#45F0DF] focus:text-[#45F0DF]' to='/'>sIUzy.web</Link>
            </div>

            <div className='grid gap-10 my-10 '>
            {navbar.map((data ,index) => (
              <Link key={index} className='border-b border-[#27272C] pb-2 font-h1 hover:text-[#45F0DF] focus:text-[#45F0DF]' to={data.path}>{data.name}</Link>
              ))}

            </div>



            </div>




         

      
    </div>
  )
}

export default Navbar
