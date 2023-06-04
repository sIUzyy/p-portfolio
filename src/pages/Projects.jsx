const projects = [

  {
    id: 1,
    imgsrc: tinyurl,
    title: 'TinyURLs',
    description: '"Elevate Your Links: Simplify, Share, and Track with TinyURLs!"',
    src: 'https://github.com/sIUzyy/p-tinyurls',
    url: 'https://tinyurlss.web.app/',
    web: 'tinyurlss.web.app',
    date: 'JUNE 2023',
    account: '',
  },

  {
    id: 2,
    imgsrc: bitvortex,
    title: 'Bitvortex',
    description: 'BitVortex: Unleash the Power of Cryptocurrency with Confidence. Seamlessly integrate our advanced API web platform to access real-time data.',
    src: 'https://github.com/sIUzyy/p-bitvortex',
    url: 'https://bitvortex-crypto.web.app/',
    web: 'bitvortex.web.app',
    date: 'MAY 2023',
    account: '',
  },

  {
    id: 3,
    imgsrc: skycast,
    title: 'SkyCast',
    description: 'Skycast: Your go-to weather API for real-time and accurate forecasts worldwide. Plan, stay informed, and make confident decisions with ease.',
    src: 'https://github.com/sIUzyy/p-skycast',
    url: 'https://skycast-weatherapi.web.app/',
    web: 'skycast.web.app',
    date: 'MAY 2023',
    account: '',
  },

  {
    id: 4,
    imgsrc: encryp,
    title: 'EncryptedX',
    description: 'EncryptedX: Unveiling encryption’s secrets. Explore cryptography, privacy, and secure communication in a concise, informative website. Enhance your digital security now.',
    src: 'https://github.com/sIUzyy/p-encryptedX',
    url: 'https://encryptedx.netlify.app',
    web: 'encryptedX.netlify.app',
    date: 'MAY 2023',
    email: '',
    pass: '',
  },

  {
    id: 5,
    imgsrc: rtu,
    title: 'RTU POS',
    description: 'RTU POS: Seamlessly integrated with the RTU Apparel eCommerce site, it’s your one-stop solution for easy and efficient point-of-sale transactions.',
    src: 'https://github.com/sIUzyy/p-rtupos',
    url: 'https://rtu-pos.web.app',
    web: 'rtu-pos.web.app',
    date: 'APRIL 2023',
    email: 'rtuadmin2023@gmail.com',
    pass: '123456',
  },

  {
    id: 6,
    imgsrc: rtu,
    title: 'RTU Apparel',
    description: 'RTU Apparel: Your online fashion destination for trendy styles and effortless shopping.',
    src: 'https://github.com/sIUzyy/p-rtuapparel',
    url: 'https://rtu-apparel.web.app',
    web: 'rtu-apparel.web.app',
    date: 'MARCH 2023',
    email: 'siuzysaur@gmail.com',
    pass: '123456',
  },

  {
    id: 7,
    imgsrc: abacus,
    title: 'Abacaus Academy',
    description: 'Abacus Academy: Empowering learners through immersive boot camps. Unlock your potential and master in-demand skills.',
    src: 'https://github.com/sIUzyy/p-abacus-academy',
    url: 'https://abacusacademy-f06cc.web.app',
    web: 'abacusacademy.web.app',
    date: 'OCT 2022',
    email: '',
    pass: '',
  },

 //
]

import React from 'react'
import rtu from '../assets/rtu.webp'
import abacus from '../assets/abacus.webp'
import encryp from '../assets/encrypted.webp'
import skycast from '../assets/skycast.webp'
import bitvortex from '../assets/bitvortex.png'
import tinyurl from '../assets/tinyurl.png'
import { Link } from 'react-router-dom'
import {BsGithub, BsLink45Deg} from 'react-icons/bs'

const Projects = () => {




  return (
    <div className='max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12'>

      <div className='container-1'>

        <h1 className='text-4xl font-h1 font-bold py-5'>  
        My Recent Projects: A showcase of my creative endeavors in the past months.
        </h1>

        <p className='text-[#A1A1AA] font-p text-lg'>
        Projects I've Crafted: Explore my recent creations with source code available on GitHub and deployed for your interactive experience.
        </p>

      </div>


    
      <div className='container-2 py-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {projects.map((exp) => (
        <div key={exp.id} className='rounded-xl  p-4 hover:bg-[#3F3F46]/25'>
           <img className='rounded-full h-10 w-10' src={exp.imgsrc} alt='' /> 

              <div className='py-5 flex justify-between w-full '>
                <h1 className='text-[#EFEFF0] font-main tracking-widest text-lg '>{exp.title}</h1>
                <h1 className='text-[#EFEFF0] font-main tracking-widest text-lg '>{exp.date}</h1>
              </div>

              <div>
                  <p className='text-[#A1A1AA] font-p text-base'>{exp.description}</p>
              </div>

              <div className='py-4'>
                <div className='flex items-center'>
                  <BsGithub size={25} className='text-[#A1A1AA]'/>
                  <Link to={exp.src} className='ml-3 text-[#EFEFF0] font-p text-base'>{exp.title}</Link>
                </div>

                <div className='flex items-center py-3'>
                  <BsLink45Deg size={25} className='text-[#A1A1AA] '/>
                  <Link to={exp.url} className='ml-3 text-[#EFEFF0] font-p text-base'>{exp.web}</Link>
                </div>
                
              </div>

              {exp.email && exp.pass && (
              <div>
                <h1 className='font-h1'>Test Account</h1>

                <h1 className='font-p text-[#A1A1AA]'>Email: {exp.email}</h1>
                <h1 className='font-p text-[#A1A1AA]'>Password: {exp.pass}</h1>
                
              </div>
              )}
        </div>
      ))}

      </div>


    </div>
  )
}

export default Projects