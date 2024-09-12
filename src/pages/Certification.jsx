// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import knowlesCompletion from '../assets/certi/knowles-completion.png'


const Certification = () => {

    const itemData = [
        {
            img: knowlesCompletion,
            company: "knowles training institute",
            certi: "IT Intern", 
            date: '2023 - 2024'
        },
    
    ]
  return (
    <div className=' max-w-2xl border-x border-[#27272C]  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white  md:px-5 lg:px-8 xl:px-12 h-screen '>
      
      <div className='container-1 mb-10'>
        <h1 className='text-4xl font-h1 font-bold pb-2'>Certifications</h1>
        <p className='text-[#A1A1AA] font-p text-lg'>Here is a list of certifications I’ve earned throughout my journey.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {itemData.map((item) => (
        
        <Zoom key={item.img}>
        <ImageListItem className='my-3 md:mx-1 md:px-2 ' >
            <div>
                <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.company}
                    className='rounded-lg hover:opacity-70'
                />
            </div>
        
            <ImageListItemBar
           
                title={
                    <div className='flex justify-between'>
                        <h1 className='text-[#d1d1d4] capitalize font-p text-sm'>{item.company} </h1>
                        <h1 className='text-[#A1A1AA]  font-p text-sm'>{item.date}</h1>
                    </div>
                }
                subtitle={<h1 className='text-[#A1A1AA] capitalize font-p text-sm'>{item.certi}</h1>}
                position="below"
            />
            
        </ImageListItem>
        </Zoom>
        
    ))}

    </div>
</div>
  )
}

export default Certification