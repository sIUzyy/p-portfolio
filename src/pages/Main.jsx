const icons =[
  {
    id: 1,
    icon: <AiOutlineInstagram size={25}/> ,
    path: 'https://www.instagram.com/siuzy.web/',
  },

  {
    id: 2,
    icon: <AiOutlineGithub size={25}/>,
    path: 'https://github.com/sIUzyy',
  },
  
  {
    id: 3,
    icon: <AiFillLinkedin size={25}/>,
    path: 'https://www.linkedin.com/in/justin-peligro-49a07b274/',
  },
]

const education = [

  {
    id: 1,
    date: 'Expected Graduation Date: March 2025',
    university: 'Rizal Technological University - Boni Campus',
    description: 'Bachelor of Science in Computer Engineering',
    details: 'In addition to being honored as a Dean`s List recipient, my coursework encompasses a range of relevant subjects, including Java Programming, C++ Programming, Assembly Language Programming, Data Structures and Algorithms. '
  },
 

  {
    id: 2,
    date: 'Graduated in March 2021',
    university: 'Arellano University - Plaridel Campus',
    description: 'Specialization in Information and Communication Technology',
    details: 'In addition to being consistently recognized as a student honor awardee, my coursework encompasses a range of relevant subjects, including Java Programming, C++ Programming, C# Programming, PHP Web Development, and HTML & CSS Fundamentals.'
  },

  
  {
    id: 3,
    date: 'Graduated in March 2019',
    university: 'Mataas na Paaralang Neptali A. Gonzales',
    description: 'Awards / Honors: Consistent Student Honor Awardee',
    details: ''
  },

]

const experiences = [

  {
    id: 1,
    title: 'TinyURLs',
    description: 'Shortened URL Api website',
    date: '2023',
    imgsrc: tinyurl,
  },

  {
    id: 2,
    title: 'Bitvortex',
    description: 'Cryptocurrency Api website',
    date: '2023',
    imgsrc: bitvortex,
  },

  {
    id: 3,
    title: 'SkyCast',
    description: 'Weather Api website',
    date: '2023',
    imgsrc: skycast,
  },

  {
    id: 4,
    title: 'RTU POS',
    description: 'Point of Sale website',
    date: '2023',
    imgsrc: rtu,
  },

  {
    id: 5,
    title: 'RTU Apparel',
    description: 'E-commerce website',
    date: '2023',
    imgsrc: rtu,
  },

  
]

const tech = [

    {
      id: 1,
      name: 'HTML',
      icon: <AiFillHtml5 className='hover:text-[#E96228]' size={50}/>,
    },

    {
      id: 2,
      name: 'CSS',
      icon: <DiCss3 className='hover:text-[#1572B6]' size={50}/>,
    },

    {
      id: 3,
      name: 'Javascript',
      icon: <SiJavascript className='hover:text-yellow-500' size={50}/>,
    },

    {
      id: 4,
      name: 'React',
      icon: <FaReact className='hover:text-[#5DD3F3]' size={50}/>,
    },

    {
      id: 5,
      name: 'Tailwind',
      icon: <SiTailwindcss className='hover:text-[#38BDF8]' size={50}/>,
    },

    {
      id: 6,
      name: 'Firebase',
      icon: <SiFirebase className='hover:text-[#FFCD33]' size={50}/>,
    },

]

import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/siuzy.webp'
import {  AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin, AiOutlineMail, AiOutlineLaptop, AiOutlineArrowDown,AiFillHtml5  } from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript, SiTailwindcss,SiFirebase} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {  useTypewriter } from 'react-simple-typewriter'
import rtu from '../assets/rtu.webp'
import abacus from '../assets/abacus.webp'
import tinyurl from '../assets/tinyurl.png'
import encryp from '../assets/encrypted.webp'
import bitvortex from '../assets/bitvortex.png'
import skycast from '../assets/skycast.webp'
import { saveAs } from 'file-saver'
import style from "./css/style.css"

const Main = () => {

  const [text] = useTypewriter({
    words: ['Computer Engineering', 'Front-End Developer'],
    loop: 0
  })

  const downloadCV = () => {
    const url = 'https://drive.google.com/file/d/1lIDtldg-C4wm2QrOuC8gNsmfoVp1Npmg/view?usp=sharing'
    
    
    saveAs(url, 'justinpeligro_CV.pdf')

  }

  return (
    <div className={`main-content max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12`}>

    <div className='py-2'>
      <div className=''>
        <Link to='/'>
        <img className='rounded-full w-14 h-14' src={profile} alt='profile' />
        </Link>
      </div>  

      <div className='pt-4'>
        <span className='text-[#E1E1E4] text-5xl font-main tracking-widest'>{text}</span>
      </div>

      <div>
        <p className='text-[#A1A1AA] font-p text-lg'>
        I'm Justin, a computer engineering student from Rizal Technological University, 
        and a self-taught front-end developer proficient in HTML, CSS, JavaScript, and React, creating dynamic and visually stunning web applications.
        </p>

        <div className='flex py-8'>
        {icons.map((media) => (
          <div className='pr-3' key={media.id}>
            <Link to={media.path}  className=' text-[#A1A1AA] hover:text-white'>{media.icon}</Link>
          </div>
        ))}
      </div>
      </div>
    </div>

    <div className='pb-10'>
      <h1 className='font-main tracking-widest text-2xl'>TECHNOLOGIES</h1>
    </div>

    <div className=''>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {tech.map((techno) => (

      <div key={techno.id} className='flex items-center pb-5'>
        <span className='mr-4 text-[#A1A1AA]'>{techno.icon}</span>
        <h1 className='text-[#A1A1AA]  font-main tracking-widest md:text-2xl'>{techno.name}</h1>
      </div>
      ))}
      </div>
    </div>

   
    <div className='main-container py-4 lg:flex'>

        <div className='container-1  lg:mr-16  lg:w-3/5'>

          <h1 className='py-5 font-main tracking-widest text-2xl'>Education Background</h1>
          {education.map((edu ,index) => (
          <div className='p-4 md:rounded-lg hover:bg-[#3F3F46]/25' key={index}>
            <h1 className='border-l-2 pl-2 text-[#71717A] border-[#71717A] font-p text-sm'>{edu.date}</h1>  
            <h1 className='py-1 text-[#DDDDDE] font-title text-lg font-bold'>{edu.university}</h1>
            <p className='py-1 text-[#8D8D95] font-p text-base'>{edu.description}</p>
            <p className='py-1 text-[#8D8D95] font-p text-base'>{edu.details}</p>
          </div>
          ))}

        </div>

        <div className='container-2 py-5  lg:w-2/5'>

          <div className='col-1 border p-4  rounded-lg border-[#27272C]'>
            <div className='flex items-center '>
            <AiOutlineMail className='text-[#A1A1AA]' size={23}/>
            <h1 className='ml-3 text-[#EFEFF0] font-title text-lg mt-1'>Contact me!</h1>
            </div>

            <p className='text-[#9C9CA5] font-p text-base'>Feel free to contact me at <span className='text-[#EFEFF0]'>justinpeligro.c04@gmail.com</span> for any inquiries or opportunities.</p>

          </div>

          <div className='border border-[#27272C] rounded-lg p-4 mt-10'>

            <div className='flex items-center'>
            <AiOutlineLaptop className='text-[#A1A1AA]' size={23}/>
            <h1 className='ml-3 text-[#EFEFF0] font-title text-lg mt-1'>Personal Projects</h1>
            </div>

            {experiences.map((exp) => (
            <div key={exp.id} className='flex items-center justify-between my-5'> 
            <div className='flex items-center'>
              <img className='w-10 h-10 rounded-full' src={exp.imgsrc} alt=''/>

              <div className='pl-2'>
                <h1 className='text-[#F4F4F5] font-title'>{exp.title}</h1>
                <h1 className='text-[#8C8C94] font-p'>{exp.description}</h1>
                </div>

              </div>

              <div>
                <h1 className='text-[#64646D] font-p'>{exp.date}</h1>
            
              </div>

            </div>
            ))}

            

            <div className='flex'>
              <button onClick={downloadCV} className='bg-[#202022] w-full p-2 rounded-lg font-title hover:opacity-90'>
              <span style={{ display: 'inline-block' }}>Download CV</span> <AiOutlineArrowDown size={18} className='ml-1' style={{ display: 'inline-block' }} />
              </button>

             
            </div>


          
          </div>

        </div>





       </div>
    </div>
  )
}

export default Main