
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from 'next';
import { mockData } from '@/data/mockData';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Heart, ShoppingCart, Check, ChevronRight } from "lucide-react"

const CustomContainer = dynamic(() => import('@/components/ui/Container'));

const Puroduct = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="txt_all py-20">
        <CustomContainer>
            <div>
                <div className="pr-left">
                    <div className="Product-Gallery">
                        
                    </div>
                    <div className="Product-Info">

                    </div>
                </div>
                <div className="pr-right flex flex-col gap-4">
                    <div className="Product-Bask">
                      <div className="max-w-md w-full bg-white rounded-2xl p-6 border">
                        <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-gray-500 line-through text-[16px]">4 651 000 so'm</p>
                            <div className="flex items-center gap-3">
                              <span className="bg-yellow-300 text-black font-medium px-2 py-0.5 rounded-full text-[12px]">-13%</span>
                              <span className="text-gray-500 text-[12px]">Kod: 82798</span>
                            </div>
                          </div>
                          <h2 className="text-[22px] font-bold">4 047 000 so'm</h2>
                        </div>

                        <div className="">
                          <div className="flex items-center gap-3 py-2">
                            <div className="bg-gray-100 p-2 rounded-lg">
                              <ShoppingCart className="text-green-500 h-5 w-5" />
                            </div>
                            <span className="text-black  font-medium text-[15px]">Mahsulot hozir 7 ta savatda</span>
                          </div>

                          <div className="flex items-center  gap-3 py-2">
                            <div className="bg-gray-100 p-2 rounded-lg">
                              <Check className="text-green-500 h-5 w-5" />
                            </div>
                            <span className="text-black font-medium">Zaxirada 10 ta bor</span>
                          </div>

                          <div className="flex gap-3 mt-5">
                            <button className="flex-1 bg-[#e34c38] hover:bg-[#c73e2d] text-white font-medium py-3 rounded-xl">
                              Savatchaga
                            </button>
                            <button
                              className="bg-[#fef2f0] border-[#fef2f0] hover:bg-[#fde7e3] p-0 h-auto w-16 flex items-center justify-center rounded-xl"
                            >
                              <Heart className="h-6 w-6 text-[#e34c38]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Product-Week">

                    </div>
                    <div className="Product-Delevry max-w-md rounded-2xl w-full p-6 border">
                      <h2 className="text-[18px] font-bold text-[#1a2b49] mb-5">Buyurtmani qabul qilish turlari:</h2>
                      <div className="mb-4">
                        <div className="flex items-baseline">
                          <span className="font-semibold text-[14px] text-[#1a2b49]">Olib ketish</span>
                          <span className="ml-1 text-[14px] text-[#6b7280]">1 ta Mediapark do'konidan.</span>
                        </div>
                        <p className="text-[14px] text-[#6b7280] mt-1">Bugun va Bepul</p>
                      </div>

                      <div className="h-[1px] bg-[#e5e7eb] my-4"></div>

                      <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-[14px] text-[#1a2b49]">90 daqiqada yetkazib beramiz</p>
                            <p className="text-[14px] text-[#6b7280] mt-1">buyurtmani rasmiylashtirgan keyin (Toshkent shahar)</p>
                          </div>
                          <div className="text-[#e34c38]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M12 4.5L4 9.5L12 14.5L20 9.5L12 4.5Z"
                                fill="#e34c38"
                                stroke="#e34c38"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4 14.5L12 19.5L20 14.5"
                                stroke="#e34c38"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                      </div>

                    </div>
                </div>
            </div>
            <div className="Related-Products">

            </div>
        </CustomContainer>
    </div>
  );
};

export default Puroduct;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {

  return {
    props: {
        ...(await serverSideTranslations(locale || 'ru', ['common'])),
        data: mockData,
    },
  };
};