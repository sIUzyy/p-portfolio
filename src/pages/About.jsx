import tin from '../assets/tin.webp'
import { Link } from 'react-router-dom'
import { media } from '../api/technology'

const About = () => {
  return (
    <div  className='max-w-2xl lg:h-screen lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12'>
      
      <div className='container lg:flex'>

        <div className='col-1 md:order-last lg:w-2/5  '>

        <div className=' '>
          <img className=' w-72 h-72 ml-5 rounded-2xl lg:mx-auto' src={tin} alt='profile-picture'/>

        </div>

          <div className='py-16 hidden lg:block lg:pl-16 '>
              {media.map((src) => (
              <div key={src.id} className='media flex items-center py-2'>

                <div >
                  <Link target='_blank' className='text-[#A1A1AA] hover:text-[#A1A1AA]' to={src.path}>
                 {src.icon}
                  </Link>
                </div>

                <div className='flex items-center pl-3 font-p text-lg hover:text-[#A1A1AA] focus:text-[#A1A1AA]'>
                  <Link target='_blank' to={src.path}>
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
                I’m Justin Peligro, a computer engineering student who is also a self-taught front-end developer.
              </h1>
              
              <p className='font-p  text-lg text-[#A1A1AA] '>
              Since then, I’ve been passionate about technology and have learned programming languages. Currently pursuing computer engineering and becoming a self-taught front-end developer, I’ve gained broad knowledge and skills. Consistent practice is important for excelling in any field, as I’ve applied my skills to many projects

              </p>
              </div>

            <div className='py-16 lg:hidden'>
              {media.map((src) => (
              <div key={src.id} className='media flex items-center py-2'>

                <div>
                <Link target='_blank' className='text-[#A1A1AA] hover:text-[#A1A1AA]' to={src.path}>
                  {src.icon}
                  </Link>
                </div>

                <div className='flex items-center pl-3'>
                  <Link target='_blank' className='font-p text-lg hover:text-[#A1A1AA]' to={src.path}>
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