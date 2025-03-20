import { CiPhone } from "react-icons/ci"
import { FaTelegram } from "react-icons/fa"

interface ProductInfoProps {
  title: string
  price: number
  itemNumber: string
  publishedDate: string
  seller: {
    phone: string
    telegram: string
  }
}

export const ProductInfo = ({
  title,
  price,
  itemNumber,
  publishedDate,
  seller,
}: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-6 max-w-[410px] py-7 px-3" style={{position: "sticky", top: "60px"}}>
        <div>
            <div className="text-4xl font-bold">{price.toLocaleString()} sum</div>
            <h2 className="text-lg font-bold">{title}</h2>
        </div>

        <div className="profile flex gap-3">
            <div className="bg-gray-400 rounded-3xl px-6 py-2"></div>
            <div>
                <h3 className="font-bold">Samariddin</h3>
                <p className="text-gray-500">Platformada 16.09.2024</p>
            </div>
        </div>

        <div className="flex gap-4">
            <div className="flex items-center bg-red-500 text-white px-4 py-3 rounded-md w-[100%]">
                <CiPhone className="mr-2 h-4 w-4" />
                <button className="flex-1" onClick={() => window.location.href = `tel:${seller.phone}`}>
                Telefon
                </button>
            </div>
            <div className="flex items-center bg-blue-500 text-white px-4 py-3 rounded-md w-[100%]">
                <FaTelegram />
                <button className="flex-1" onClick={() => window.location.href = seller.telegram}>
                Telegram
                </button>
            </div>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex justify-between text-[17px]">
                <span className="text-gray-400">Raqami:</span> 
                {itemNumber}
            </div>
            <div className="flex justify-between text-[17px]">
                <span className="text-gray-400">Nashr vaqti:</span> 
                {new Date(publishedDate).toLocaleString()}
            </div>
        </div>
    </div>
  )
}