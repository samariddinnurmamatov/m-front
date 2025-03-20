import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { mockData } from '@/data/mockData';
import ProductGridSection from '@/sections/home/ProductGridSection';

// Lazy load components
const BannerSection = dynamic(() => import('@/sections/home/Banner'));
const CategorySection = dynamic(() => import('@/sections/home/Category'));
const PurchaseSection = dynamic(() => import('@/sections/home/PurchaseSection'));
const NewsSection = dynamic(() => import('@/sections/home/NewsSection'));


const Home = ({ data, categories }: { data: any, categories: any }) => {
  const { t } = useTranslation();

  const allTabProducts = useMemo(() => {
    return data.tabs.flatMap((tab: any) => tab.products);
  }, [data.tabs]);
  
  const categoryItems = useMemo(() => {
    return data.categoryItems.filter((product: any) => product.status);
  }, [data.categoryItems]);
  
  return (
    <main>

      <BannerSection bannerImages={data.bannerImages} />

      <CategorySection categoryItems={categoryItems} />

      <PurchaseSection purchaseItems={data.purchaseItems} />
      
      <ProductGridSection
        products={data.productItems.concat(allTabProducts)}
      />

      <NewsSection newsItems={data.newsItems} />

    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  // const categories = await prisma.category.findMany();

  return {
    props: {
      ...(await serverSideTranslations(locale || 'ru', ['common'])),
      data: mockData,
      // categories
    },
  };
};
