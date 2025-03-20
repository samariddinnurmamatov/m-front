import type React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const CustomContainer = dynamic(() => import("@/components/ui/Container"), { ssr: false });

interface CategoryItem {
  id: number;
  imageSrc: string;
  title: string;
}

interface NewsCardProps {
  newsItems: CategoryItem[];
}

const NewsCardSection: React.FC<NewsCardProps> = ({  newsItems }) => {
  return (
    <div className="grid grid-cols-3 gap-5 justify-between">
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
    </div>
  );
};

export default NewsCardSection;
