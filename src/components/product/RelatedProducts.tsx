
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

export interface RelatedProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  publishedDate: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[]
}

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 8 },
      },
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 },
      },
    },
  })

  return (
    <div className="relative">
      <h2 className="text-xl font-bold mb-4">O'xshashlar</h2>
      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <p className="text-xl font-bold">{product.price.toLocaleString()} y.e.</p>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>{product.location}</span>
                  <span>{new Date(product.publishedDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        Left
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        Right
      </button>
    </div>
  )
}

