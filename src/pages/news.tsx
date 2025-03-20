import React from "react";
import AboutImg from "@/assets/about_img.svg"
import Image from "next/image";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { mockData } from "@/data/mockData";

const CustomSectionName = dynamic(() => import('@/components/ui/SectionName'));
const CustomContainer = dynamic(() => import('@/components/ui/Container'));
const NewsCardSection = dynamic(() => import('@/sections/news/NewsCardSection'));

const News = ({ data, categories }: { data: any, categories: any }) => {
  return (
    <main>
      <CustomSectionName title="Новости" />
      <section className="txt_all bg-black text-white">
        <CustomContainer>
            <div className="flex flex-col gap-10 py-24">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[40px] font-bold">Hовости</h1>
                    <p className="text-[30px] leading-9 max-w-[680px] text-[#ffffffdd]">Mы разработали новые методы и апробировали их по приемлемым для клиента ценам</p>
                </div>
                {/* <div className="grid grid-cols-3 gap-5 justify-between">
                    <div className="flex flex-col rounded-[20px] text-white overflow-hidden c_z" style={{  width: "100%" }}>
                        <div className="zoom-wrapper">
                            <Image src={AboutImg} alt="About Background" />
                        </div>
                        <p className="text-[20px] py-9 px-2">Модели бытовой техники</p>
                    </div>
                    <div className="flex flex-col rounded-[20px] text-white overflow-hidden c_z" style={{ width: "100%" }}>
                        <div className="zoom-wrapper">
                            <Image src={AboutImg} alt="About Background" />
                        </div>
                        <p className="text-[20px] py-9 px-2">Модели бытовой техники</p>
                    </div>
                    <div className="flex flex-col rounded-[20px] text-white overflow-hidden c_z" style={{ width: "100%" }}>
                        <div className="zoom-wrapper">
                            <Image src={AboutImg} alt="About Background" />
                        </div>
                        <p className="text-[20px] py-9 px-2">Модели бытовой техники</p>
                    </div>
                    <div className="flex flex-col rounded-[20px] text-white overflow-hidden c_z" style={{ width: "100%" }}>
                        <div className="zoom-wrapper">
                            <Image src={AboutImg} alt="About Background" />
                        </div>
                        <p className="text-[20px] py-9 px-2">Модели бытовой техники</p>
                    </div>
                    <div className="flex flex-col rounded-[20px] text-white overflow-hidden c_z" style={{ width: "100%" }}>
                        <div className="zoom-wrapper">
                            <Image src={AboutImg} alt="About Background" />
                        </div>
                        <p className="text-[20px] py-9 px-2">Модели бытовой техники</p>
                    </div>
                    <div className="flex flex-col rounded-[20px] text-white overflow-hidden c_z" style={{ width: "100%" }}>
                        <div className="zoom-wrapper">
                            <Image src={AboutImg} alt="About Background" />
                        </div>
                        <p className="text-[20px] py-9 px-2">Модели бытовой техники</p>
                    </div>
                </div> */}
                <NewsCardSection newsItems={data.newsItems} />
            </div>
        </CustomContainer>
      </section>
    </main>
  );
};

export default News;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      data: mockData,
    },
  };
};