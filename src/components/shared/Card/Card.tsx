import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CardProps {
  id: string;
  imageSrc: StaticImageData;
  title: string;
  price: string;
}

const CustomCard = ({ id, imageSrc, title, price }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    // <div className='card' style={{ width: "100%" }}>
    //   <Image src={imageSrc} alt={title} width={100} height={100} style={{ width: "100%" }} />
    //   <div className='flex justify-between p-2'>
    //     <div className='flex flex-col gap-2'>
    //       <h3>{title}</h3>
    //       <p className='text-gray-500'>{price}</p>
    //     </div>
    //     <div className='cursor-pointer'>
    //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    //           <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    //       </svg>
    //     </div>
    //   </div>
    // </div>
    // <div className="w-full">
    //   <div
    //     className="relative bg-[#F2F2F2] rounded-[32px] p-8 transition-all duration-300 overflow-hidden"
    //     onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)}
    //   >
    //     <div className="relative aspect-square overflow-hidden mb-4">
    //       <Image src={imageSrc} alt={title} width={100} height={100} style={{ width: "100%" }} />
    //     </div>

    //     {/* Container for text and button with smaller fixed height */}
    //     <div className="relative h-[60px] overflow-hidden">
    //       {/* Text content that moves up and fades out on hover */}
    //       <div
    //         className={`absolute inset-x-0 top-0 transition-all duration-300 transform ${
    //           isHovered ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
    //         }`}
    //       >
    //         <h2 className="text-xl font-medium text-center">{title}</h2>
    //       </div>

    //       {/* Button that appears from bottom on hover */}
    //       <div
    //         className={`absolute inset-x-0 bottom-0 transition-all duration-300 transform ${
    //           isHovered ? "translate-y-0" : "translate-y-full"
    //         }`}
    //       >
    //         <button
    //           className="w-full bg-[#98C73D] text-black py-3 px-6 flex items-center justify-center space-x-2 
    //                       hover:bg-[#89b834] transition-colors rounded-[16px]"
    //         >
    //           <span className="text-lg font-medium">Купить</span>
    //           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
    <div className="w-full max-w-sm mx-auto card">
      <Link href={`/product/${id}`}>
        <div
          className="relative bg-[#F2F2F2] rounded-[32px] transition-all duration-300 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image container with zoom effect */}
          <div className="relative p-8">
            <div className="relative aspect-square overflow-hidden">
              <Image src={imageSrc} alt={title} width={100} height={100} style={{ width: "100%" }} className={`transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`} />
            </div>
          </div>

          {/* Text/Button container */}
          <div className="relative px-8 pb-4">
            {/* Text that moves up and fades out on hover */}
            <div
              className={`absolute inset-x-0 top-0 transition-all duration-300 ${
                isHovered ? "translate-y-[-20px] opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <h2 className="text-[16px] font-medium text-center">{title}</h2>
            </div>

            {/* Button that moves up and fades in on hover */}
            <div className={`transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0 pointer-events-none"}`}>
              <button
                className="w-full bg-[#98C73D] hover:bg-[#89b834] text-black py-3 px-6 
                        flex items-center justify-center gap-2 rounded-[26px] transition-colors"
              >
                <span className="text-[13px] font-medium text-center">Купить</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>

  );
};

export default CustomCard;
