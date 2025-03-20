import React from 'react';
import dynamic from 'next/dynamic';
import { safer } from '@/utils/safer';
const CustomContainer = dynamic(() => import('@/components/ui/Container'), { ssr: false });
const CustomCarousel = dynamic(() => import('@/components/ui/Carousel'), { ssr: false });

interface BannerSectionProps {
  bannerImages: Array<{
    src: string
    text?: string
  }>
}

const BannerSection: React.FC<BannerSectionProps> = ({ bannerImages }) => (
  <div className='py-32' style={{backgroundColor: "#111111"}}>
    <CustomContainer className="banner_slide">
      <CustomCarousel images={bannerImages} />
    </CustomContainer>
  </div>
)

export default safer(BannerSection)
