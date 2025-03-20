import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import Image from 'next/image'
import { ProductLocation, ProductSeller } from './ProductLocation';


export interface ProductImage {
  id: string; // Id turi string bo'lishi kerak
  url: string;
  alt: string;
}

export interface ProductSpecification {
  name: string;
  value: string;
}

interface ProductGalleryProps {
  images: ProductImage[]
  specs: ProductSpecification[]
  description: string
  seller: ProductSeller
}

export const ProductGallery = ({ images, specs, description, seller }: ProductGalleryProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 8,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const [thumbnailRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 4,
      spacing: 8,
    },
  })

  return (
    <div className="space-y-4">
      <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
        {images.map((image) => (
          <div key={image.id} className="keen-slider__slide">
            <Image
              src={image.url}
              alt={image.alt}
              width={600}
              height={600}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider">
        {images.map((image, idx) => (
          <div
            key={image.id}
            className={`keen-slider__slide cursor-pointer ${
              currentSlide === idx ? 'border-2 border-primary' : ''
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={100}
              height={100}
              className="w-full h-[80px] object-cover rounded"
            />
          </div>
        ))}
      </div>

      {/* Specifications */}
      <div className="py-6">
        <h2 className="text-xl font-bold mb-4">Xususiyatlar</h2>
        <div className="space-y-3">
          {specs.map((spec, index) => (
            <div key={index} className="flex justify-between text-[17px] border-b border-gray-100 py-2">
              <span className="text-gray-500">{spec.name}</span>
              <span>{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="py-6">
        <h2 className="text-xl font-bold mb-4">Tavsif</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Location */}
      <ProductLocation seller={seller} />
    </div>
  )
}

