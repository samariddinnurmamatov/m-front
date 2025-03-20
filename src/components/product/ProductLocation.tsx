export interface ProductSeller {
  id: string;
  name: string;
  phone: string;
  telegram: string;
  location: {
    address: string;
    district: string;
    landmark: string;
    coordinates: number[];
  };
}

interface ProductLocationProps {
  seller: ProductSeller
}

export const ProductLocation = ({ seller }: ProductLocationProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Bitim joyi</h2>
      <div className="space-y-2">
        <p>{seller.location.address}</p>
        <p className="text-gray-500">{seller.location.district}</p>
        <p className="text-gray-500">{seller.location.landmark}</p>
      </div>
      
      <div className="mt-4 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Map placeholder</span>
      </div>
    </div>
  )
}