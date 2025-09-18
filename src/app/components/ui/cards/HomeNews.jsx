// src/app/components/ui/cards/HomeNews.jsx

import Image from 'next/image'

const HomeNews = (
    { children,
      imageSrc,
      title,
      description,
      date
     }
) => {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden p-4 flex flex-col h-full'>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <Image 
            src={imageSrc || '/placeholder-image.png'}
            alt={title || 'News article image'} 
            layout="fill" 
            objectFit="cover" 
          />
          {date && (
            <span className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2 py-1 rounded-md">
                {date}
            </span>
          )}
        </div>
        
        <div className="flex flex-col flex-grow mt-4">
          <h2 className='text-xl font-bold text-[#1B365D] mb-2 truncate'
          >{title}</h2>
          <p className='text-gray-600 text-sm mb-4 line-clamp-3'
          >{description}</p>
        </div>

        <div className="mt-auto">
            {children}
        </div>
    </div>
  )
}

export default HomeNews;