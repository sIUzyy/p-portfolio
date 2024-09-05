const navbar = [

  {
    id: 1,
    name: 'Main',
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    path: '/about',
  },

  {
    id: 3,
    name: 'Work',
    path: '/work',
  },


  {
    id: 4,
    name: 'Projects',
    path: '/projects',
  },

  // {
  //   id: 4,
  //   name: 'Technology',
  //   path: '/technology',
  // },

  {
    id: 5,
    name: 'Uses',
    path: '/uses',
  },

  
]

import {useState, useEffect}from 'react'
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

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Avoid hiding the navbar when at the very top of the page
      if (window.scrollY <= 0) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className='max-w-2xl  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-10  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12'>

        <div className={`hidden w-max left-0 right-0 mx-auto bg-[#18181B] rounded-md p-2 md:fixed md:block ${showNavbar ? 'top-10' : '-top-full'}`}>

          <div className='flex items-center'>
            {navbar.map((data ,index) => (
              <Link onClick={scrollToTop} key={index} className='px-2 font-h1 hover:text-[#A1A1AA] hover:scale-90 focus:text-[#A1A1AA]' to={data.path}>{data.name}</Link>
              ))}

            </div>

        </div>

          <div className={
            `fixed w-full left-0 px-4 flex items-center justify-between md:hidden transition-transform duration-300 
            ${showNavbar ? 'top-5' : '-top-full'}
            `}>

              <div>
               <Link onClick={scrollToTop} className=' bg-[#18181B] p-2 rounded-md capitalize font-title text-sm tracking-widest hover:text-[#A1A1AA] focus:text-[#A1A1AA]' to='/'>justin peligro</Link>
              </div>   

              <div className=' p-2 bg-[#18181B] rounded-md  right-3 md:hidden' onClick={() =>setNav(!nav)}>
                {nav ?  <AiOutlineClose size={30}/> :  <RxHamburgerMenu  size={30}/>} 
              </div>

            </div>

            {/* mobile view navbar */}

            <div className={nav ? 'bg-black h-screen w-4/5 fixed top-0 left-0 py-10 px-3 ease-in-out duration-500 z-10': 'fixed left-[-100%]' }>
              
            <div>
            <Link onClick={scrollToTop} className='capitalize font-title text-sm tracking-widest hover:text-[#A1A1AA] focus:text-[#A1A1AA]' to='/'>justin peligro</Link>
            </div>

            <div className='grid gap-10 my-10 '>
            {navbar.map((data ,index) => (
              <Link onClick={scrollToTop} key={index} className='border-b border-[#27272C] pb-2 font-h1 hover:text-[#A1A1AA] focus:text-[#A1A1AA]' to={data.path}>{data.name}</Link>
              ))}

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
