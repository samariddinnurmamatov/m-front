import React from "react";
import AboutImg from "@/assets/about_img.svg"
import Image from "next/image";
import dynamic from "next/dynamic";

const CustomSectionName = dynamic(() => import('@/components/ui/SectionName'));

const About: React.FC = () => {
  return (
    <main>
      <CustomSectionName title="О нас" />
      <section className="txt_all bg-black text-white">
        <div className="container">
            <div className="flex flex-col gap-10 py-24">
                <h1 className="text-[30px] leading-9 max-w-[700px] text-[#ffffffdd]">Живите с нами в стильной и комфортной обстановке на крыше</h1>
                <Image src={AboutImg} alt="About Background" />
            </div>
        </div>
        <hr />
        <div className="container">
            <div className="flex flex-col gap-10 py-24">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[40px] font-bold">Результаты в течение года</h1>
                    <p className="text-[30px] leading-9 max-w-[900px] text-[#ffffffdd]">Mы разработали новые методы и апробировали их по приемлемым для клиента ценам</p>
                </div>
                <div className="flex gap-5 justify-between">
                    <div className="flex flex-col gap-3 rounded-[16px] pt-12 pb-20 px-8 transition-all duration-500 border-[1px] border-[#252525] hover:border-[#FFEEBACC]" style={{ background: "#252525", width: "100%" }}>
                        <h2 className="text-[53px]">40+</h2>
                        <p className="text-[20px]">Модели бытовой техники</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-[16px] pt-12 pb-20 px-8 transition-all duration-500 border-[1px] border-[#252525] hover:border-[#FFEEBACC]" style={{ background: "#252525", width: "100%" }}>
                        <h2 className="text-[53px]">35</h2>
                        <p className="text-[20px]">Проведение заводского аудита</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-[16px] pt-12 pb-20 px-8 transition-all duration-500 border-[1px] border-[#252525] hover:border-[#FFEEBACC]" style={{ background: "#252525", width: "100%" }}>
                        <h2 className="text-[53px]">5+</h2>
                        <p className="text-[20px]">Так долго мы с тобой</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default About;


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { locale } = context;
//   // const categories = await prisma.category.findMany();

//   return {
//     props: {
//       ...(await serverSideTranslations(locale || 'ru', ['common'])),
//       data: mockData,
//       // categories
//     },
//   };
// };
