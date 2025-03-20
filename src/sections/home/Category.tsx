import type React from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useState } from "react"

const CustomContainer = dynamic(() => import("@/components/ui/Container"), { ssr: false })

interface CategoryItem {
  id: number
  imgSrc: string
  title: string
}

interface CategoryPopularListProps {
  categoryItems: CategoryItem[]
}

const Category: React.FC<CategoryPopularListProps> = ({ categoryItems }) => {
  const [hoveredIndex, setHoveredIndex] = useState<{ [key: number]: boolean }>({});
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <CustomContainer>
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-bold text-3xl">Топ продукты</h1>
          <Link href="/view-all" className="text-blue-600 hover:underline">
              View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6">
          {categoryItems.map((item, index) => (
            // <Link
            //   key={item.id}
            //   href={`/category/${item.id}`}
            //   className={`block ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            // >
            //   <div 
            //     className="h-full bg-[#F8F8F8] rounded-[32px] p-6 flex flex-col items-center justify-center"
            //     onMouseEnter={() => setHoveredIndex((prev) => ({ ...prev, [item.id]: true }))}
            //     onMouseLeave={() => setHoveredIndex((prev) => ({ ...prev, [item.id]: false }))}
            //   >
            //     <div className={`relative w-full ${index === 0 ? "h-[400px] md:h-[500px]" : "h-[200px] md:h-[220px]"}`}>
            //       <Image
            //         src={item.imgSrc || "/placeholder.svg"}
            //         alt={item.title}
            //         fill
            //         className="object-contain p-6"
            //         sizes={
            //           index === 0
            //             ? "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            //             : "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            //         }
            //       />
            //     </div>
            //     <h3 className="mt-4 text-center text-lg font-medium text-gray-900 px-4">{item.title}</h3>
            //   </div>
            // </Link>
            <Link 
              key={item.id}
              href={`/category/${item.id}`}
              className={`block ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div
                className="relative h-full bg-[#F8F8F8] rounded-[32px] p-7 flex flex-col gap-4 items-center justify-center"
                onMouseEnter={() => setHoveredIndex((prev) => ({ ...prev, [item.id]: true }))}
                onMouseLeave={() => setHoveredIndex((prev) => ({ ...prev, [item.id]: false }))}
              >
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <Image 
                      src={item.imgSrc} 
                      alt={item.title} 
                      width={100} 
                      height={100} 
                      style={{ width: "100%" }} 
                      className={`transition-transform duration-300 ${hoveredIndex[item.id] ? "scale-110" : "scale-100"}`} 
                      onLoadingComplete={() => setIsImageLoading(false)}
                    />
                  </div>
                </div>

                <div className="relative w-[90%] mx-auto">
                    <div
                      className={`absolute inset-x-0 top-0 transition-all duration-300 ${
                        hoveredIndex[item.id] ? "translate-y-[-20px] opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    >
                      <h2 className="text-[16px] font-medium text-center">{item.title}</h2>
                    </div>

                    <div 
                      className={`transition-all duration-300 ${
                        hoveredIndex[item.id] ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0 pointer-events-none"
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
      </section>
    </CustomContainer>
  )
}

export default Category;



{/* <div className="grid grid-cols-2 gap-4">
          {categoryItems.length > 0 && (
            <Link
              href={`/category/${categoryItems[0].id}`}
              key={categoryItems[0].id}
              className="row-span-2 py-12 px-16 rounded-[32px] flex flex-col items-center justify-center gap-8 bg-[#F2F2F2]"
            >
              <Image
                src={categoryItems[0].imgSrc}
                alt={categoryItems[0].title}
                width={100}
                height={70}
                className="rounded-md"
                style={{ width: "100%", height: "100%", objectFit: "cover", margin: "0 auto" }}
              />
              <h3 className="text-lg font-semibold text-center">{categoryItems[0].title}</h3>
            </Link>
          )}
          <div className='grid grid-cols-2 items-center justify-center gap-6'>
            {categoryItems.slice(1).map((category, index) => (
              <Link
                href={`/category/${category.id}`}
                key={category.id}
                className="py-12 px-16 rounded-[32px] flex flex-col items-center justify-center gap-8 bg-[#F2F2F2]"
              >
                <Image
                  src={category.imgSrc}
                  alt={category.title}
                  width={70}
                  height={70}
                  className="rounded-md"
                  style={{ width: "100%", height: "100%", objectFit: "cover", margin: "0 auto" }}
                />
                <h3 className="text-lg font-semibold text-center">{category.title}</h3>
              </Link>
            ))}
          </div>
        </div> */}