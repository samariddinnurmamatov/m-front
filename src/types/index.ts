import { StaticImageData } from "next/image";

export type LangsType = "uz" | "ru" | "kr";
export type ILangs = Record<LangsType, string>;


export interface ProductItem {
    id: string;               // Unique identifier for the product
    imageSrc: StaticImageData; // Image source, typed as StaticImageData for Next.js images
    title: string;            // Product title
    price: string;            // Price as a string (e.g., "$120")
}

export interface TabItem {
    id: string;
    label: string;
}