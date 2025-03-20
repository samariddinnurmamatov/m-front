import Image from "next/image";
import logo from "@/assets/FORY.svg";
import tg from "@/assets/socials_tg.svg";
import youtube from "@/assets/socials_youtube.svg";
import ins from "@/assets/socials_ins.svg";
import Link from "next/link";

const Footer = () => {

  return (
    // <div className="flex flex-col items-center justify-between gap-4 py-4 px-4" style={{borderTop: "1px solid #e9e9e9", width: "100%"}}> 
    //   <Image src={logo} alt="Company logo" width={100} height={100} />
    //   <div className="flex items-center font-bold gap-5">
    //     <Link href={"/about"}>Biz haqimizda</Link>
    //     <Link href={"/about"}>Biz bilan bog’lanish</Link>
    //     <Link href={"/about"}>Sotuvchi kabineti</Link>
    //   </div>
    //   <div className="font-bold flex flex-col items-center">
    //     <h3 style={{borderBottom: "1px solid black", paddingBottom: "5px"}}>Ijtimoiy tarmoqlarda</h3>
    //     <div className="flex gap-4 mt-4 mb-6">
    //       <a href=""><Image src={tg} alt="Company logo" width={33} height={100} /></a>
    //       <a href=""><Image src={youtube} alt="Company logo" width={33} height={100} /></a>
    //       <a href=""><Image src={ins} alt="Company logo" width={33} height={100} /></a>
    //     </div>
    //   </div>
    //   <div className="font-bold">
    //     <p>«2024© YaTT «FORY MARKET». Barcha huquqlar himoyalangan»</p>
    //   </div>
    // </div>
    <footer className="bg-black text-white py-10 px-8">
      <div className="flex flex-col gap-9">
        <div className="flex items-center justify-between">
          <h2>LAMO LOGO</h2>
          <div className="flex gap-4">
             <a href=""><Image src={tg} alt="Company logo" width={33} height={100} /></a>
             <a href=""><Image src={youtube} alt="Company logo" width={33} height={100} /></a>
             <a href=""><Image src={ins} alt="Company logo" width={33} height={100} /></a>
          </div>
        </div>
        <div className="flex items-center gap-7">
            <Link className="flex gap-2 text-gray-300" href="/about"> 
              Топ продукты
            </Link>
            <Link className="flex gap-2 text-gray-300" href="favorite">
              О нас
            </Link>
            <Link className="flex gap-2 text-gray-300" href="/account"> 
              Результаты
            </Link>
            <Link className="flex gap-2 text-gray-300" href="favorite">
              Кулеры
            </Link>
            <Link className="flex gap-2 text-gray-300" href="favorite">
              Где купить?
            </Link>
            <Link className="flex gap-2 text-gray-300" href="favorite">
              Все продукции
            </Link>
            <Link className="flex gap-2 text-gray-300" href="favorite">
              Новости
            </Link>

        </div>
        <hr  style={{border: ".8px solid #2F2F2F"}}/>
        <p className="text-[13px] text-[#909090]">@2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
