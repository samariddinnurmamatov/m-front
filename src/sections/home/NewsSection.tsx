import type React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const CustomContainer = dynamic(() => import("@/components/ui/Container"), { ssr: false });
const CustomSlider = dynamic(() => import("@/components/ui/Slider"), { ssr: false });

interface CategoryItem {
  id: number;
  imageSrc: string;
  title: string;
}

interface NewsProps {
  newsItems: CategoryItem[];
}

const News: React.FC<NewsProps> = ({ newsItems }) => {
  return (
    <section className="bg-[#F2F2F2] mt-32">
    <CustomContainer>
      <section className="py-14">
        <div>
            <h1 className="text-[40px] font-bold">Hовости</h1>
            <p className="text-[30px] leading-9 max-w-[680px] ">Mы разработали новые методы и апробировали их по приемлемым для клиента ценам</p>
        </div>
        <div className="pt-9">
            <CustomSlider>
            {newsItems.map((news) => (
                <div
                key={news.id}
                className="flex flex-col rounded-[20px] overflow-hidden w-full c_z"
                >
                <div className="zoom-wrapper">
                    <Image src={news.imageSrc} alt={news.title} width={100} height={200} className="w-full" />
                </div>
                <p className="text-[22px] py-4 font-bold px-2">{news.title}</p>
                </div>
            ))}
            </CustomSlider>
        </div>
      </section>
    </CustomContainer>
    </section>
  );
};

export default News;
