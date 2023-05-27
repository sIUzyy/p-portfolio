const tech = [
  {
    id: 1,
    imgsrc: html,
    title: 'HTML',
    description: 'HTML stands for Hypertext Markup Language. It is the standard markup language used for creating and structuring web pages.',
  },

  {
    id: 2,
    imgsrc: css,
    title: 'CSS',
    description: 'CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation and layout of web pages.',
  },

  {
    id: 3,
    imgsrc: js,
    title: 'Javascript',
    description: 'JS stands for JavaScript. It is a programming language used to add interactivity and dynamic behavior to web pages.',
  },

  {
    id: 4,
    imgsrc: tailwind,
    title: 'Tailwind',
    description: 'Tailwind is a popular utility-first CSS framework that simplifies web development by providing pre-built CSS classes that can be applied directly to HTML elements.',
  },

  {
    id: 5,
    imgsrc: react,
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces, focusing on creating reusable UI components.',
  },

  {
    id: 6,
    imgsrc: firebase,
    title: 'Firebase',
    description: 'Firebase is a platform developed by Google that provides various backend services and tools for building and scaling web and mobile applications.',
  },
]

const tools = [
  {
    id: 1,
    imgsrc: git,
    title: 'GIT',
    description: 'Git is a distributed version control system that allows multiple developers to collaborate on a project, tracking changes and managing code versions.',
  },

  {
    id: 2,
    imgsrc: github,
    title: 'Github',
    description: 'GitHub is a web-based hosting service for Git repositories, providing a platform for developers to store, collaborate, and manage their code.',
  },

  {
    id: 3,
    imgsrc: ai,
    title: 'ChatGPT',
    description: 'ChatGPT is an AI language model developed by OpenAI, designed to generate human-like responses and engage in conversational interactions with users.',
  },
  {
    id: 4,
    imgsrc: postMan,
    title: 'Postman',
    description: 'Postman is a popular API development and testing tool that simplifies the process of building, documenting, and testing APIs. It provides a user-friendly interface for making HTTP requests, enabling developers to interact with APIs easily.',
  }
]


import React from 'react'
import html from '../assets/html-tech.webp'
import css from '../assets/css-tech.webp'
import js from '../assets/js-tech.webp'
import react from '../assets/react-tech.webp'
import firebase from '../assets/fb-tech.webp'
import tailwind from '../assets/tailwind.webp'

import git from '../assets/git.webp'
import github from '../assets/github.webp'
import ai from '../assets/ai.webp'
import postMan from '../assets/postman.webp'

const Technology = () => {
  return (
    <div className='max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white border-x border-[#27272C] md:px-5 lg:px-8 xl:px-12'>
      
      <div className='container-1'>
        <h1 className='text-4xl font-h1 font-bold py-5'>Explore the cutting-edge technologies powering my coding journey, from robust frameworks to efficient programming languages</h1>

        <p className='text-[#A1A1AA] font-p text-lg pb-10'>
        Immerse yourself in a coding journey that harnesses the full potential of cutting-edge technologies,
        incorporating resilient frameworks and optimized programming languages to propel your development skills to new level.
        </p>
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