import React, {useState, useEffect} from 'react'
import { projects } from '../api/projects'
import { Link } from 'react-router-dom'
import {BsGithub, BsLink45Deg} from 'react-icons/bs'

const Projects = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === projects.length) {
          clearInterval(interval); // Stop the interval once count reaches 20
          return projects.length; // Set count to the real value
        }
        return prevCount + 1; // Increment count by 1 for each interval tick
      });
    }, 100); // Adjust the interval speed (lower value for faster increment)

    return () => clearInterval(interval); // Clean up the interval on component unmount

  }, []);

  return (
    <div className='max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12'>


      <div className='container-1'>

      <div className='mb-2 font-h1 text-[#A1A1AA]  '>
        <h1 className='uppercase tracking-widest text-[12px]'>Total Projects: <label className='text-2xl'>{count}</label></h1>
      </div>

        <h1 className='text-4xl font-h1 font-bold pb-5'>  
        My Recent Projects: Here are some projects I’ve worked on in the past few months.
        </h1>

        <p className='text-[#A1A1AA] font-p text-lg'>
        Explore my recent projects with source code available on GitHub and deployed for your interactive experience.
        </p>

      </div>

     

    
      <div className='container-2 py-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {projects.map((exp, index) => (
        <div key={index} className='rounded-xl  p-4 hover:bg-[#3F3F46]/25'>
           <img className='rounded-full h-10 w-10' src={exp.imgsrc} alt='' /> 

         
            
            <div className='flex text-sm font-h1 pt-5 items-center '>
              <h1 className='pr-2 text-gray-600  '>{exp.date}</h1>
              <h1 className='text-gray-600'>| {exp.tech}</h1>

            </div>

              <div className='pb-5 flex justify-between w-full '>
                <h1 className='text-[#EFEFF0] font-main tracking-widest text-lg '>{exp.title}</h1>
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