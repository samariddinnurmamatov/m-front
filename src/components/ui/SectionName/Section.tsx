import React, { useState } from "react"
import Image from "next/image"

interface SectionProps {
  title: string;
}

const CustomSectionName: React.FC<SectionProps> = ({ title }) => {
  return (
    <section className="ori-breadcrumbs-section">
      <div className="container z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="line-animation">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="line-area">
            <div className={`line ${index % 2 === 0 ? "even" : "odd"}`}></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CustomSectionName;

