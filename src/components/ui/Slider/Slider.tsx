import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface CustomSliderProps {
  children: React.ReactNode;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ children }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 15 },
    
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 2000); // Har 2 sekundda keyingi slaydga o'tadi

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {React.Children.map(children, (child) => (
          <div className="keen-slider__slide flex justify-center">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
