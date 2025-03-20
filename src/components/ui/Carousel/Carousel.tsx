import React, { useState } from "react"
import { type KeenSliderOptions, useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import Prew from "@/assets/prew.svg";
import Next from "@/assets/next.svg"

interface CarouselProps {
  images: Array<{
    src: string
    text?: string
  }>
}

const CustomCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const isSingleImage = images.length === 1

  const options: KeenSliderOptions = {
    loop: !isSingleImage,
    mode: "snap",
    slides: { perView: 1, spacing: 0 },
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(options)
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.on("slideChanged", () => {
        setCurrentSlide(instanceRef.current?.track.details.rel || 0)
      })
    }
  }, [instanceRef])

  const handlePrevClick = () => {
    if (instanceRef.current && !isSingleImage) {
      instanceRef.current.prev()
    }
  }

  const handleNextClick = () => {
    if (instanceRef.current && !isSingleImage) {
      instanceRef.current.next()
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div ref={sliderRef} className="keen-slider rounded-[32px] overflow-hidden">
        {images.map((slide, index) => (
          <div key={index} className="keen-slider__slide relative h-[450px]">
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Slide Text */}
      {images[currentSlide]?.text && (
        <div className="absolute bottom-32 left-9 right-9">
          <h2 className="text-white text-[48px] font-semibold leading-tight whitespace-pre-line">
            {images[currentSlide].text.replace(/\s+/, " \n")}
          </h2>
        </div>
      )}

      {/* Fixed Navigation Controls */}
      <div className="absolute bottom-8 left-9 flex items-center gap-5">
        <button
          onClick={handlePrevClick}
          className="w-12 h-12 rounded-full bg-[#FFFFFF] backdrop-blur-sm flex items-center justify-center hover:bg-white/90 transition-colors"
          disabled={isSingleImage}
          aria-label="Previous slide"
        >
          <Image src={Prew} alt="Prew" width={18} height={18} onLoadingComplete={() => setIsImageLoading(false)}/>
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? "bg-white" : "bg-white/30"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNextClick}
          className="w-12 h-12 rounded-full bg-[#FFFFFF] backdrop-blur-sm flex items-center justify-center hover:bg-white/90 transition-colors"
          disabled={isSingleImage}
          aria-label="Next slide"
        >
          <Image src={Next} alt="Next" width={18} height={18} />
        </button>
      </div>
    </div>
  )
}

export default CustomCarousel;




// import React from "react"
// import { type KeenSliderOptions, useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import Image from "next/image"

// interface CarouselProps {
//   images: Array<{
//     src: string
//     text?: string
//   }>
// }

// const CustomCarousel: React.FC<CarouselProps> = ({ images }) => {
//   const isSingleImage = images.length === 1

//   const options: KeenSliderOptions = {
//     loop: !isSingleImage,
//     mode: "snap",
//     slides: { perView: 1, spacing: 0 },
//   }

//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(options)
//   const [currentSlide, setCurrentSlide] = React.useState(0)

//   React.useEffect(() => {
//     if (instanceRef.current) {
//       instanceRef.current.on("slideChanged", () => {
//         setCurrentSlide(instanceRef.current?.track.details.rel || 0)
//       })
//     }
//   }, [instanceRef])

//   const handlePrevClick = () => {
//     if (instanceRef.current && !isSingleImage) {
//       instanceRef.current.prev()
//     }
//   }

//   const handleNextClick = () => {
//     if (instanceRef.current && !isSingleImage) {
//       instanceRef.current.next()
//     }
//   }

//   return (
//     <div className="relative overflow-hidden">
//       <div ref={sliderRef} className="keen-slider rounded-[32px] overflow-hidden">
//         {images.map((slide, index) => (
//           <div key={index} className="keen-slider__slide relative h-[400px]">
//             <Image
//               src={slide.src || "/placeholder.svg"}
//               alt={Slide ${index + 1}}
//               fill
//               className="object-cover"
//               priority={index === 0}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
//               <div className="absolute top-12 left-12 max-w-xl">
//                 <h2 className="text-white text-4xl font-bold leading-tight select-all">{slide.text}</h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Fixed Navigation Controls */}
//       <div className="absolute bottom-8 left-9  flex items-center gap-6">
//         <button
//           onClick={handlePrevClick}
//           className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
//           disabled={isSingleImage}
//           aria-label="Previous slide"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>

//         {/* Dot Indicators */}
//         <div className="flex items-center gap-2">
//           {images.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => instanceRef.current?.moveToIdx(idx)}
//               className={w-2 h-2 rounded-full transition-all ${currentSlide === idx ? "bg-white" : "bg-white/30"}}
//               aria-label={Go to slide ${idx + 1}}
//             />
//           ))}
//         </div>

//         <button
//           onClick={handleNextClick}
//           className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
//           disabled={isSingleImage}
//           aria-label="Next slide"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default CustomCarousel
// ; 