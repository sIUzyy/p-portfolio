import React from 'react'
import tin from '../assets/tin.webp'
import { Link } from 'react-router-dom'
import { media } from '../api/technology'

const About = () => {
  return (
    <div  className='max-w-2xl lg:h-screen  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12'>
      
      <div className='container lg:flex'>

        <div className='col-1 md:order-last lg:w-2/5  '>

        <div className=' '>
          <img className=' w-72 h-72    ml-5 rounded-2xl lg:mx-auto' src={tin} alt='ai-tin'/>

        </div>

          <div className='py-16 hidden lg:block lg:pl-16 '>
              {media.map((src) => (
              <div key={src.id} className='media flex items-center py-2'>

                <div >
                  <Link className='text-[#A1A1AA] hover:text-[#45F0DF]' to={src.path}>
                 {src.icon}
                  </Link>
                </div>

                <div className='flex items-center pl-3 font-p text-lg hover:text-[#A1A1AA] focus:text-[#A1A1AA]'>
                  <Link to={src.path}>
                  {src.at}
                </Link>

                </div>


              </div>
              ))}
              </div>
    

        </div>



        <div className='col-2 lg:w-3/5'>
            <div className='py-10'>
              <div>
              <h1 className='pb-5 text-4xl font-h1 font-bold'>
                I'm Justin Peligro, a computer engineering student who is also a self-taught front-end developer.
              </h1>
              
              <p className='font-p text-justify text-lg text-[#A1A1AA] '>
                Since I was a kid, I have been passionate about technology and have had a strong desire to learn new things.
                When I reached senior high school, I had opportunity to exposed into the world of coding, where I learned various programming languages and enhance my
                logical thinking abilities. Now that I am in college, I have chosen to pursue computer engineering to expand my knowledge further. 
                Additionally, while studying, I have taken it upon myself to become a self-taught front-end developer.
                 Throughout this journey, I have acquired extensive knowledge and skills, which I have applied in numerous projects to enhance my proficiency in this field. 
                 I firmly believe that consistent daily practice is essential to excel in any field.

              </p>
              </div>

            <div className='py-16 lg:hidden'>
              {media.map((src) => (
              <div key={src.id} className='media flex items-center py-2'>

                <div>
                <Link className='text-[#A1A1AA] hover:text-[#45F0DF]' to={src.path}>
                  {src.icon}
                  </Link>
                </div>

                <div className='flex items-center pl-3'>
                  <Link className='font-p text-lg hover:text-[#45F0DF]' to={src.path}>
                  {src.at}
                </Link>
                </div>
              </div>
              ))}
              </div>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default About