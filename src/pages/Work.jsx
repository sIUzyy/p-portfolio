
import { work } from '../api/work'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Work = () => {

  return (
    <div className='max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12 h-auto md:h-screen'>

      <div className='container-1'>

        <h1 className='text-4xl font-h1 font-bold pb-5'>  
        My Recent Work Experiences. 
        </h1>

        <p className='text-[#A1A1AA] font-p text-lg'>
        In my recent work experiences, I’ve faced different challenges, developed important skills, and made a meaningful impact.
        </p>

      </div>

    
      <div className='container-2 py-10 grid gap-10 grid-cols-1 md:grid-cols-2 '>
      
      {work.map((works, index) => (
        <div key={index} className='rounded-xl  p-4 hover:bg-[#3F3F46]/25'>
        <img className='rounded-full h-10 w-10' alt='work-img' src={works.imgsrc} />

        <div className='flex text-sm font-h1 pt-5 items-center '>
              <h1 className='pr-2 text-gray-600  '>{works.date}</h1>
              <h1 className='text-gray-600'>| {works.tech}</h1>
        </div>

        <div className=' flex justify-between w-full '>
          <h1 className='text-[#EFEFF0] font-main tracking-widest text-lg '>{works.company}</h1>
        </div>

        <div className='pb-5 flex justify-between w-full '>
          <h1 className='text-[#EFEFF0] font-main tracking-widest text-md '>{works.position}</h1>
        </div>


        <div className='responsibilities_section'>
            {works.res && works.res.length > 0 ? (
            <ul className="list-disc list-inside text-[#A1A1AA] font-p text-base ">
                {works.res.map((item, index) => (
                    <li className='my-2' key={index}>{item}</li>
                ))}
            </ul>
        ) : (
            <p>No responsibilities listed</p>
        )}
        </div>

        <div className='flex justify-end  font-h1 '>
          <div className='flex justify-between items-center'>
            <Link className='mr-1' to={'/certification'} title='Click to View the Certifications'>Certification</Link>
            <HiOutlineArrowLongRight/>
          </div>
        </div>



      </div>
      ))}
      
    </div>
  </div>
  )
}

export default Work