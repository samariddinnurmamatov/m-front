import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const CustomContainer = dynamic(() => import('@/components/ui/Container'), { ssr: false });

interface ProductGridSectionProps {
  products: any[];
}

const ProductGridSection = ({ products }: ProductGridSectionProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [hoveredIndex, setHoveredIndex] = useState<{ [key: number]: boolean }>({});

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  const displayedProducts = products.slice(0, visibleProducts);

  return (
    <CustomContainer>
      <section className='mt-32'>
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-[38px]">Все продукции</h1>
          <Link href="/view-all" className="text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {displayedProducts.map((product) => (
            <Link href={`/product`} key={product.id} className="w-full max-w-sm mx-auto card">
                <div
                  className="relative bg-[#F2F2F2] rounded-[32px] transition-all duration-300 overflow-hidden"
                  onMouseEnter={() => setHoveredIndex((prev) => ({ ...prev, [product.id]: true }))}
                  onMouseLeave={() => setHoveredIndex((prev) => ({ ...prev, [product.id]: false }))}
                >
                  <div className="relative p-8">
                    <div className="relative aspect-square overflow-hidden">
                      <Image 
                        src={product.imageSrc} 
                        alt={product.title} 
                        width={100} 
                        height={100} 
                        style={{ width: "100%" }} 
                        className={`transition-transform duration-300 ${hoveredIndex[product.id] ? "scale-110" : "scale-100"}`} 
                        onLoadingComplete={() => setIsImageLoading(false)}
                      />
                    </div>
                  </div>

                  <div className="relative px-8 pb-4">
                    <div
                      className={`absolute inset-x-0 top-0 transition-all duration-300 ${
                        hoveredIndex[product.id] ? "translate-y-[-20px] opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    >
                      <h2 className="text-[16px] font-medium text-center">{product.title}</h2>
                    </div>

                    <div 
                      className={`transition-all duration-300 ${
                        hoveredIndex[product.id] ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0 pointer-events-none"
                      }`}
                    >
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
          ))}
        </div>

        {visibleProducts < products.length && (
          <div className='flex items-center justify-center mt-6'>
            <button
              type='button'
              onClick={handleLoadMore}
              className='bg-gray-200 px-20 py-3 rounded-[10px] font-bold'
            >
              Ko'proq ko'rsatish
            </button>
          </div>
        )}
      </section>
    </CustomContainer>
  );
};

export default ProductGridSection;
