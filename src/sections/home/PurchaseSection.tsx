import dynamic from "next/dynamic";
import Image from "next/image"
import Link from "next/link"

const CustomContainer = dynamic(() => import('@/components/ui/Container'), { ssr: false });

interface PurchaseItem {
  id: string
  imageSrc: string
}

interface PurchaseSectionProps {
  purchaseItems: PurchaseItem[]
}

const PurchaseSection = ({ purchaseItems }: PurchaseSectionProps) => {
  return (
    <CustomContainer>
      <section className="mt-32">
        <div className="flex items-center justify-between mb-5">
            <h1 className="font-bold text-[38px]">Где купить?</h1>
            <Link href="/view-all" className="text-blue-600 hover:underline">
                View All
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {purchaseItems.map((item) => (
            <Link
              key={item.id}
              href={`/category/${item.id}`}
              className={`relative group overflow-hidden rounded-[16px] bg-muted bg-[#F2F2F2]`}
            >
              <div className="p-7 flex items-center justify-center h-[120px]">
              <Image
                src={item.imageSrc || "/placeholder.svg"}
                alt="asd"
                width={100}
                height={70}
                className="w-full h-auto max-h-full object-contain"
                priority
              />
            </div>
            </Link>
          ))}
        </div>
      </section>
    </CustomContainer>
  )
}


export default PurchaseSection;