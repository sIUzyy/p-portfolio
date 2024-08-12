const work = [
    {
      id: 1,
      title: '23’ Dual Monitor Desktop',
      description: 'To maximize productivity in my development endeavors, I utilize a professional 23’ dual monitor desktop setup equipped with two 23-inch monitors, 12GB RAM, a mid-performance GPU, and a 5th generation Intel Core processor.',
    },

]

const dev = [

  {
    id: 1,
    title: 'Visual Studio Code',
    description: 'I leverage Visual Studio Code, an exceptional integrated development environment (IDE), to proficiently write code and efficiently develop websites. It stands out as the most impressive IDE I have encountered, providing a wide array of invaluable extensions that significantly enhance my productivity.',
  },

  {
    id: 2,
    title: 'ChatGPT',
    description: 'I seek assistance from ChatGPT to verify the correctness of my implementation and to request guidance in debugging my code.',
  },

  {
    id: 3,
    title: 'Postman',
    description: 'I use Postman to streamline my API development workflow, allowing me to efficiently structure APIs, make requests, and test their functionality.'
  },

]

const design = [

  {
    id: 1,
    title: 'Figma',
    description: 'I turned to Figma as a valuable resource for UI reference, despite my limited familiarity with the tool, relying on it primarily when seeking design inspiration in situations where my own creative ideas are insufficient.',
  },

  {
    id: 2,
    title: 'Canva',
    description: 'Canva is an invaluable platform where I seek professional design resources and create stunning mock-ups for my website.',
  },

]


import React from 'react'

const Uses = () => {
  return (
    <div className='max-w-2xl  lg:max-w-5xl xl:max-w-6xl  2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12'>

        <div className='container-1'>
          <h1 className='text-4xl font-h1 font-bold py-5 '>
          Check out the gadgets and software I rely on during my development journey.
          </h1>

          <p className='text-[#A1A1AA] font-p text-lg pb-10'>
          Throughout my development journey, I rely on a range of essential gadgets and software to enhance my productivity.
          </p>
        </div>


        <div className='border-l pl-4 my-4 border-[#27272C] lg:flex'>

          <div>
            <h1 className='font-main tracking-widest text-2xl'>Workstation</h1>
          </div>

          <div className='pt-4 lg:pt-0'>
            {work.map((info) => (
            <div key={info.id} className=' lg:ml-[90px]'>
              <h1 className='text-[#DDDDDE] font-title text-lg'>{info.title}</h1>
              <h1 className='text-[#8D8D95] font-p text-base mb-16'>{info.description}</h1>
            </div>
            ))}
          </div>
        </div>

        <div className='border-l pl-4 my-4 border-[#27272C] lg:flex'>

        <div>
          <h1 className='font-main tracking-widest text-2xl'>Development tools</h1>
        </div>

        <div className='pt-4 lg:pt-0'>
          {dev.map((data) => (
          <div key={data.id} className=' lg:ml-[87px]'>
            <h1 className='text-[#DDDDDE] font-title text-lg'>{data.title}</h1>
            <h1 className='text-[#8D8D95] font-p text-base mb-16'>{data.description}</h1>
          </div>
          ))}
        </div>
        </div>


    <div className='border-l pl-4 my-4 border-[#27272C] lg:flex'>

      <div>
        <h1 className='font-main tracking-widest text-2xl'>Design</h1>
      </div>

      <div className='pt-4 lg:pt-0'>
        {design.map((info) => (
        <div key={info.id} className=' lg:ml-[152px]'>
          <h1 className='text-[#DDDDDE] font-title text-lg'>{info.title}</h1>
          <h1 className='text-[#8D8D95] font-p text-base mb-16'>{info.description}</h1>
        </div>
        ))}

      
      </div>
      </div>


      
    </div>
  )
}

export default Uses