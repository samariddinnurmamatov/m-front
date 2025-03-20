import CustomContainer from "@/components/ui/Container";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Favorite: React.FC = () => {
    const router = useRouter();
    const [isImageLoading, setIsImageLoading] = useState(true);

    const handleRedirect = () => {
        router.push("/");
    };
  return (
    <main className="py-40 bg-[#F2F2F2]">
        <CustomContainer>
            <section className="flex flex-col items-center text-center gap-5 justify-center max-w-[400px] mx-auto">
                <div
                    className={`relative w-52 h-52 transition-opacity duration-500 ease-in-out ${
                    isImageLoading ? "opacity-50" : "opacity-100"
                    }`}
                >
                    <Image
                        src="https://uzum.uz/static/img/hearts.cf414be.png"
                        alt="free"
                        width={208}
                        height={208}
                        className="object-cover"
                        onLoadingComplete={() => setIsImageLoading(false)}
                    />
                </div>
                
                <div className="flex flex-col items-center gap-[10px]">
                    <p className="font-bold text-[20px]">Add what you like</p>
                    <p className="">
                    Click on ♡ in the product. Log in to your account and all your
                    favorites will be saved.
                    </p>
                </div>
                
                <button
                    type="button"
                    className="min-w-[250px] flex items-center justify-center rounded-[12px] p-[14px] bg-blue-500 font-bold text-white"
                    onClick={handleRedirect}
                >
                    Bosh Sahifaga
                </button>
            </section>
        </CustomContainer>
    </main>
  );
};

export default Favorite;