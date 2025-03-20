"use client";
import CustomContainer from "@/components/ui/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "@/assets/lamo_logo.svg"
import Image from "next/image";
// const CustomDropdown = dynamic(() => import('@/components/ui/Select'), { ssr: false });

// const language = {
//   ru: "Русский",
//   uz: "Uzbek",
//   kr: "Ўзбекча",
// } as const;

// const select_options = [
//   { label: language.ru, value: "ru" },
//   { label: language.uz, value: "uz" },
//   { label: language.kr, value: "kr" },
// ];

const MainHeader = () => {
  const router = useRouter();
  // const { i18n, t } = useTranslation();

  // const changeLanguage = useCallback(
  //   (lng: string) => {
  //     i18n.changeLanguage(lng);
  //   },
  //   [i18n]
  // );

  // useEffect(() => {
  //   i18n.on("languageChanged", (lng: string) => {
  //     const query = { ...router.query };
  //     router.push({ pathname: router.pathname, query }, undefined, {
  //       locale: lng,
  //     });
  //   });
  // }, [i18n, router]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`)
    }
  }

  return (
    // <div className="flex items-center justify-between gap-4 py-4 px-4 container" style={{borderBottom: "1px solid #e9e9e9", width: "100%"}}> 
    //   <Image src={logo} alt="Company logo" width={100} height={100} />
    //   <div className="flex items-center justify-between gap-2 font-bold py-2 px-6 rounded-[12px] bg-blue-600 text-white">
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
    //       <path d="M2 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //       <path d="M5 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //       <path d="M15 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //       <path d="M8 18V6C8 5.05719 8 4.58579 8.29289 4.29289C8.58579 4 9.05719 4 10 4C10.9428 4 11.4142 4 11.7071 4.29289C12 4.58579 12 5.05719 12 6V18C12 18.9428 12 19.4142 11.7071 19.7071C11.4142 20 10.9428 20 10 20C9.05719 20 8.58579 20 8.29289 19.7071C8 19.4142 8 18.9428 8 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //       <path d="M18 18V6C18 5.05719 18 4.58579 18.2929 4.29289C18.5858 4 19.0572 4 20 4C20.9428 4 21.4142 4 21.7071 4.29289C22 4.58579 22 5.05719 22 6V18C22 18.9428 22 19.4142 21.7071 19.7071C21.4142 20 20.9428 20 20 20C19.0572 20 18.5858 20 18.2929 19.7071C18 19.4142 18 18.9428 18 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   </svg>
    //     Katalog
    //   </div>
    //   <form action=""  className="flex items-center gap-4 py-2 px-5 w-[50%] rounded-[12px] bg-gray-100" onSubmit={handleSearch}>
    //       <CiSearch className="text-[23px]" />
    //       <input
    //         className="bg-transparent outline-none"
    //         type="text"
    //         name="name"
    //         placeholder="Search"
    //         aria-label="Search"
    //         style={{width: "100%"}}
    //       />
    //   </form>
    //   <div className="flex gap-5">
    //     <button className="py-3 px-4 rounded-[15px] bg-gray-100" aria-label="Favorites">
    //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="20" height="20" color="#000000" fill="none">
    //           <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    //       </svg>
    //     </button>
    //     <CustomDropdown
    //           options={select_options}
    //           value={i18n.language}
    //           onValueChange={changeLanguage}
    //           ariaLabel="Select language"
    //           title={
    //             <div className="relative text-[14px] text-gray flex items-center gap-[4px] font-bold">
    //               {i18n.language.toUpperCase()}
    //             </div>
    //           }
    //     />
    //     <button className="flex items-center gap-2 py-2 px-5 rounded-[15px] text-[13px] font-bold bg-gray-100" aria-label="LogIn">
    //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    //           <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //           <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
    //       </svg>
    //       <span>Login</span>
    //     </button>
    //   </div>
    // </div>
    <header className="bg-black text-white sticky top-0 py-5 px-3 z-50">
      <CustomContainer>
        <div className="flex items-center justify-between gap-5">
            <Link href={"/"}> <Image src={Logo} alt="Company logo" width={100} height={100} style={{width: "160px"}} /> </Link>
            
            <div className="flex items-center gap-7">

                <Link className="flex gap-2 text-gray-300" href="/about"> 
                  Топ продукты
                </Link>
                <Link className="flex gap-2 text-gray-300" href="/about">
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
                <Link className="flex gap-2 text-gray-300" href="/news">
                  Новости
                </Link>
                <Link className="flex gap-2 text-gray-300" href="/favorite">
                  Корзина
                </Link>

            </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default MainHeader;
