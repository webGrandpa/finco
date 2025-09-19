import Image from 'next/image';

const NewsCard = ({ image, header, paragraph, date, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 flex h-full flex-col md:flex-row justify-center md:justify-items-start transition-transform hover:scale-101 duration-300">
      
      {/* THIS IS THE CORRECTED LINE */}
      <div className="relative w-full h-48 md:h-full md:max-w-[324px] rounded-xl flex-shrink-0">
        <Image
          src={image || '/placeholder-image.png'} // Added a fallback image
          alt={header || 'News article image'}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="rounded-lg"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#1B365D] mb-2 leading-tight">
          <span className="line-clamp-2">{header}</span>
        </h3>

        <p className="text-gray-600 text-sm flex-grow mb-4">
          <span className="line-clamp-3">{paragraph}</span>
        </p>

        <div className="flex justify-between items-center mt-auto pt-4">
          <span className="text-sm text-gray-500">{date}</span>
          <div className='flex items-center space-x-2 w-full justify-center md:justify-end'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;