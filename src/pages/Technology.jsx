import { tech, tools } from '../api/technology'

const Technology = () => {
  return (
    <div className='max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12'>
      
      <div className='container-1'>
        <h1 className='text-4xl font-h1 font-bold pt-5 pb-10'>Technologies and Tools I’ve used.</h1>
      </div>

      <div className='container-2'>
      <h1 className='font-main tracking-widest text-4xl mb-5'>TECHNOLOGIES</h1>
         
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {tech.map((info) => (
            <div key={info.id} className=' p-4 md:rounded-lg hover:bg-[#3F3F46]/25'>
              <img className='rounded-full h-10 w-10 mb-4' src={info.imgsrc} alt='' />
              <h1 className='text-[#DDDDDE] font-title text-lg'>{info.title}</h1>
              <p className='text-[#A1A1AA] font-p text-lg'>{info.description}</p>
            </div>
            ))}

          </div>
       

        <h1 className='font-main tracking-widest text-4xl my-5'>TOOLS</h1>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {tools.map((data) => (
            <div key={data.id} className=' p-4 md:rounded-lg hover:bg-[#3F3F46]/25 '>
              <img className='rounded-full h-10 w-10 mb-4' src={data.imgsrc} alt='' />
              <h1 className='text-[#DDDDDE] font-title text-lg'>{data.title}</h1>
              <p className='text-[#A1A1AA] font-p text-lg'>{data.description}</p>
            </div>
            ))}

          </div>
     

      </div>


    </div>
  )
}

export default Technology