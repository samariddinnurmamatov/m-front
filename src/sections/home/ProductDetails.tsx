
import { ProductInfo } from "@/components/product/Product-info";
import { ProductGallery, ProductImage, ProductSpecification } from "@/components/product/ProductGallery"
import { ProductSeller } from "@/components/product/ProductLocation";
import { RelatedProduct, RelatedProducts } from "@/components/product/RelatedProducts"

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    images: ProductImage[];
    specifications: ProductSpecification[];
    seller: ProductSeller;
    itemNumber: string;
    publishedDate: string;
    relatedProducts: RelatedProduct[];
  }

interface ProductDetailsProps {
  product: Product
}

export const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div className="py-10">
      <div className="grid gap-7 justify-between md:grid-cols-2">
        <ProductGallery 
          images={product.images}
          specs={product.specifications}
          description={product.description}
          seller={product.seller}
        />
        <div className="space-y-8">
          <ProductInfo
            title={product.title}
            price={product.price}
            itemNumber={product.itemNumber}
            publishedDate={product.publishedDate}
            seller={product.seller}
          />
        </div>
      </div>
      <div className="mt-8">
        <RelatedProducts products={product.relatedProducts} />
      </div>
    </div>
  );
};
